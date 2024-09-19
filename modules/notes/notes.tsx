"use client";
import React, { useState, useEffect, useRef } from "react";
import NotesHead from "@/components/notes/notes-head";
import { Drawer, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

type Tab =
  | "notes"
  | "reminders"
  | "archive"
  | "family"
  | "work"
  | "tasks"
  | "priority"
  | "personal"
  | "friends";

type NoteItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

const defaultTabs: Tab[] = [
  "notes",
  "reminders",
  "archive",
  "family",
  "work",
  "tasks",
  "priority",
  "personal",
  "friends",
];

const Notes = () => {
  const [activeTab, setActiveTab] = useState<Tab>("notes");
  const [content, setContent] = useState<Record<Tab, NoteItem[]>>(() =>
    defaultTabs.reduce((acc, tab) => {
      acc[tab] = [];
      return acc;
    }, {} as Record<Tab, NoteItem[]>)
  );

  const [isAddingNote, setIsAddingNote] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newNote, setNewNote] = useState<Omit<NoteItem, "id">>({
    title: "",
    description: "",
    tags: [],
    image: undefined,
  });

  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    // Load content from localStorage on component mount
    const savedContent = localStorage.getItem("notesContent");
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(
          defaultTabs.reduce((acc, tab) => {
            acc[tab] = Array.isArray(parsedContent[tab])
              ? parsedContent[tab]
              : [];
            return acc;
          }, {} as Record<Tab, NoteItem[]>)
        );
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Save content to localStorage whenever it changes
    localStorage.setItem("notesContent", JSON.stringify(content));
  }, [content]);

  const handleAddNote = () => {
    setIsAddingNote(true);
  };

  const handleSaveNote = () => {
    if (newNote.title.trim() !== "") {
      const newNoteWithId: NoteItem = {
        ...newNote,
        id: Date.now().toString(),
      };
      setContent((prevContent) => ({
        ...prevContent,
        [activeTab]: [...(prevContent[activeTab] || []), newNoteWithId],
      }));
      setNewNote({ title: "", description: "", tags: [], image: undefined });
      setIsAddingNote(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewNote((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setNewNote((prev) => ({ ...prev, image: undefined }));
  };

  const handleEditNote = (note: NoteItem) => {
    setEditingNote({ ...note });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingNote) {
      setContent((prevContent) => {
        const updatedContent = prevContent[activeTab].map((note) =>
          note.id === editingNote.id ? editingNote : note
        );
        return { ...prevContent, [activeTab]: updatedContent };
      });
      setIsEditModalOpen(false);
      setEditingNote(null);
    }
  };

  const handleDeleteNote = () => {
    if (editingNote) {
      setContent((prevContent) => {
        const updatedContent = prevContent[activeTab].filter(
          (note) => note.id !== editingNote.id
        );
        return { ...prevContent, [activeTab]: updatedContent };
      });
      setIsEditModalOpen(false);
      setEditingNote(null);
    }
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="py-5 container m-auto max-w-[1250px] px-10">
      <NotesHead toggleDrawer={toggleDrawer(true)} />
      <div className="flex h-screen bg-white dark:bg-[#1e1e1e] rounded-xl mt-10">
        {/* Sidebar */}
        <div className="w-1/4 p-4 bg-white dark:bg-[#1e1e1e] rounded-tl-xl rounded-bl-xl lg:block hidden">
          <ul className="overflow-y-scroll no-scrollbar max-h-[60vh]">
            {defaultTabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-3 mb-2 cursor-pointer rounded ${
                  activeTab === tab
                    ? "bg-gray-200 dark:bg-[#ffffff] dark:bg-opacity-10"
                    : "hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:bg-opacity-10"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <Drawer
          open={open}
          onClose={handleDrawerClose}
        >
          <div className="md:w-[500px] w-[300px] p-4 bg-white dark:bg-[#1e1e1e]  relative h-full">
            <ul className="mt-10">
              {defaultTabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-3 mb-2 cursor-pointer rounded dark:text-white ${
                    activeTab === tab
                      ? "bg-gray-200 dark:bg-[#ffffff] dark:bg-opacity-10"
                      : "hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:bg-opacity-10"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                position: "absolute",
                top: 4,
                right: 8,
                color: "black",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
              }}
              className="dark:text-white"
            >
              <Close />
            </IconButton>
          </div>
        </Drawer>

        {/* Content Area */}
        <div className="lg:w-3/4 w-full p-6 overflow-y-scroll no-scrollbar max-h-[100vh]">
          <div className="bg-gray-100 dark:bg-dark200 rounded-xl border dark:border-[#4f4f4f] p-6">
            {/* Add Note Input */}
            <div className="flex justify-center">
              {!isAddingNote ? (
                <div
                  onClick={handleAddNote}
                  className="bg-white dark:bg-[#1e1e1e] p-2 mb-4 rounded-lg cursor-pointer shadow-md w-full sm:w-3/4"
                >
                  Take a note...
                </div>
              ) : (
                <div className="bg-white dark:bg-[#1e1e1e] mb-4 rounded-xl shadow-md w-full sm:w-3/4">
                  {newNote.image && (
                    <div className="relative">
                      <img
                        src={newNote.image}
                        alt="Uploaded"
                        className="w-full h-fit object-cover mb-2 rounded-t-xl"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="p-2 text-white bg-[#00A4EF] hover:bg-[#0078D7] absolute bottom-5 right-3 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  <div className="p-4">
                    <input
                      type="text"
                      placeholder="Title"
                      value={newNote.title}
                      onChange={(e) =>
                        setNewNote({ ...newNote, title: e.target.value })
                      }
                      className="w-full p-2 mb-2 outline-none"
                    />
                    <textarea
                      placeholder="Take a note..."
                      value={newNote.description}
                      onChange={(e) =>
                        setNewNote({ ...newNote, description: e.target.value })
                      }
                      className="w-full p-2 mb-2 outline-none"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="mb-2 hidden"
                    />
                    <div className="flex xss:justify-between xss:items-center xss:flex-row flex-col">
                      <button
                        onClick={triggerFileInput}
                        className="p-2 bg-transparent text-black dark:text-white rounded hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={handleSaveNote}
                        className="px-4 py-2 bg-[#00A4EF] hover:bg-[#0078D7] text-white rounded"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {content[activeTab]?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#1e1e1e] shadow-md rounded-xl cursor-pointer h-fit"
                  onClick={() => handleEditNote(item)}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Note"
                      className="w-full h-fit object-cover mb-2 rounded-t-xl"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-2">{item.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-200 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && editingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-lg w-1/4 overflow-y-scroll no-scrollbar max-h-[100vh]">
            {editingNote.image && (
              <img
                src={editingNote.image}
                alt="Note"
                className="w-full block object-cover mb-2"
              />
            )}
            <div className="p-3">
              <input
                type="text"
                value={editingNote.title}
                placeholder="Title"
                onChange={(e) =>
                  setEditingNote({ ...editingNote, title: e.target.value })
                }
                className="w-full p-2 mb-2 outline-none text-lg font-bold"
              />
              <textarea
                value={editingNote.description}
                placeholder="Take a note..."
                onChange={(e) =>
                  setEditingNote({
                    ...editingNote,
                    description: e.target.value,
                  })
                }
                className="w-full p-2 mb-2 outline-none text-sm"
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditingNote((prev) =>
                        prev
                          ? { ...prev, image: reader.result as string }
                          : null
                      );
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="mb-2 hidden"
              />
              <div className="flex justify-between items-center">
                <div>
                  <button
                    onClick={triggerFileInput}
                    className="p-2 bg-transparent text-black dark:text-white rounded hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleDeleteNote}
                    className="p-2 bg-transparent text-black dark:text-white rounded hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 bg-transparent text-black dark:text-white rounded hover:bg-gray-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-4 py-2 bg-[#00A4EF] hover:bg-[#0078D7] text-white rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
