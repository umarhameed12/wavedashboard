"use client";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemText,
  Drawer,
  Typography,
  Box,
  IconButton,
  Divider,
  useMediaQuery,
  ListItem,
} from "@mui/material";
import {
  Email as EmailIcon,
  Work as WorkIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  LocationOn as LocationIcon,
  Cake as CakeIcon,
  Close as CloseIcon,
 
} from "@mui/icons-material";
import React, { useState } from "react";

interface Contact {
  id: number;
  name: string;
  title: string;
  avatar: string;
  email: {
    personal: string;
    work: string;
  };
  phone: {
    mobile: string;
    work: string;
    home: string;
  };
  address: string;
  birthdate: string;
  bio: string;
  coverImage: string;
}

const ContactCard: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width:600px)");
  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const contacts: Contact[] = [
    {
      id: 1,
      name: "Cathryn Snider",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage:
        "https://t3.ftcdn.net/jpg/05/03/88/66/360_F_503886623_DrTvDBm1EwZRT7Cloo0zUjOjjBBSDWP1.jpg",
    },
    {
      id: 1,
      name: "Alissa Nelson",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Alvarado Turner",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Alyce Cash",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Angela Gallagher",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Barber Johnson",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Bernard Langley",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Candice Munoz",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Cervantes Kramer",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Cervantes Kramer",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Dee Alvarado",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Dejesus Michael",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Dena Molina",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Duncan Carver",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Duran Barr",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Earlene Rosales",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Edwards Mckenzie",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Enid Sparks",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Francisca Perkins",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Herring Gonzales",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Holt Manning",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Jacklyn Morgan",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Juana Morrow",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Kristie Hall",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    {
      id: 1,
      name: "Kristine Pacheco",
      title: "Short Story Writer",
      avatar: "/api/placeholder/80/80",
      email: {
        personal: "cathrynsnider@mail.ca",
        work: "snider.cathryn@phormula.org",
      },
      phone: {
        mobile: "+264 895 471 3836",
        work: "+264 851 492 3567",
        home: "+264 805 487 2816",
      },
      address: "528 Glenmore Avenue, Elrama, Illinois, PO2952",
      birthdate: "June 9, 1981",
      bio: "Ea enim exercitation lorem excepteur officia nulla culpa culpa nisi veniam quis non duis exercitation labore commodo et occaecat reprehenderit ex velit exercitation commodo cupidatat amet veniam mollit magna consectetur. Voluptate consectetur eu id elusmod anim reprehenderit incididunt duis veniam tempor culpa ea esse tempor do laborum dolore sint ea duis incididunt in do aliqua exercitation officia deserunt.",
      coverImage: "/api/placeholder/800/200",
    },
    // Add more contacts here...
  ];
  return (
    <div className=" mt-5 ">
      <Box sx={{ bgcolor: "background.paper" }}>
        <List
          sx={{}}
          className=" max-h-[95vh] overflow-y-scroll no-scrollbar p-2 bg-gray-100 rounded-lg"
        >
          {contacts.map((contact) => (
            <ListItem
              key={contact.id}
              component="div"
              onClick={() => handleContactClick(contact)}
              className="border-b-2  border-gray-300"
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                className=" w-full  text-sm text-gray-600 "
                primary={contact.name}
                secondary={contact.title}
              />
            </ListItem>
          ))}
        </List>
           {/* drawer  */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "600px" }, // Apply max-width based on breakpoints
               // Padding
            }}
          >
            {selectedContact && (
              <>
                <Box sx={{ position: "relative", mb: -5, padding:0 }}>
                  <img
                    src={selectedContact.coverImage}
                    alt="Cover"
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                  <IconButton
                    onClick={handleDrawerClose}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "black",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    ml: 2,
                    mt: -5,
                    mb: 2,
                  }}
                >
                  <div className=" flex  items-center relative">
                    <Avatar
                      alt={selectedContact.name}
                      src={selectedContact.avatar}
                      className="ml-6"
                      sx={{
                        width: 100,
                        height: 100,
                        border: "4px solid white",
                      }}
                    />
                    {/* <button
                    className=" gap-1 absolute left-1/4 rounded-lg bg-200 text-white sm:px-7  p-2 flex items-center justify-center cursor-pointer"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </button> */}
                  </div>

                  <Box sx={{ ml: 2, mb: 1 }}>
                    {/* <Typography variant="h6">{selectedContact.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedContact.title}
                    </Typography> */}
                  </Box>
                </Box>
                <Typography className="ml-8  font-bold" variant="h6">
                  {selectedContact.name}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box
                  sx={{
                    padding: 5, // padding around the entire content
                    "& > div": {
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 0", // vertical padding between sections
                    },
                  }}
                >
                  {/* Title */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                     {/* <BusinessCenterOutlinedIcon/> */}
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedContact.title}
                  </Typography>

                  </Box>

                  {/* Email Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <EmailIcon sx={{ mr: 2, color: "gray" }} />{" "}
                    {/* Increased space (mr: 2) between icon and text */}
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {selectedContact.email.personal}
                        <Typography component="span" sx={{ color: "gray" }}>
                          • Personal
                        </Typography>
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        {selectedContact.email.work}
                        <Typography component="span" sx={{ color: "gray" }}>
                          • Work
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <PhoneIcon sx={{ mr: 2, color: "gray" }} />{" "}
                    {/* Increased space between icon and text */}
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {selectedContact.phone.mobile}
                        <Typography component="span" sx={{ color: "gray" }}>
                          • Mobile
                        </Typography>
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        {selectedContact.phone.work}
                        <Typography component="span" sx={{ color: "gray" }}>
                          • Work
                        </Typography>
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        {selectedContact.phone.home}
                        <Typography component="span" sx={{ color: "gray" }}>
                          • Home
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Address Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <LocationIcon sx={{ mr: 2, color: "gray" }} />{" "}
                    {/* Space between icon and text */}
                    <Typography variant="body2" sx={{ color: "gray", ml: 1 }}>
                      {selectedContact.address}
                    </Typography>
                  </Box>

                  {/* Birthdate Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <CakeIcon sx={{ mr: 2, color: "gray" }} />
                    <Typography variant="body2" sx={{ color: "gray", ml: 1 }}>
                      {selectedContact.birthdate}
                    </Typography>
                  </Box>
                </Box>

                {/* Bio Section */}
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "gray",
                    lineHeight: 1.6,
                    padding: 5,
                  }}
                >
                  {selectedContact.bio}
                </Typography>
              </>
            )}
          </Box>
        </Drawer>
      </Box>
    </div>
  );
};

export default ContactCard;
