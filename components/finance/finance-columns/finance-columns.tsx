const Financecolumns = [
  {
    name: "Transcation ID",
    selector: (row: any) => row.transcationId,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    cell: (row: any) => (
      <div
        className={`${row.status === "Pending" && "bg-red/30 text-red "} ${
          row.status === "Completed" && "bg-green/30 text-green "
        } rounded-full p-1 w-24 text-center`}
      >
        <p className="text-sm font-medium">{row.status}</p>
      </div>
    ),
  },
];
export default Financecolumns;
