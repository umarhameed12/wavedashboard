import PrintableDetails from "@/components/invoices/printable/printable-details";
import PrintableFooter from "@/components/invoices/printable/printable-footer";
import PrintableHeader from "@/components/invoices/printable/printable-header";
import PrintableTable from "@/components/invoices/printable/printable-table";
import {
  invoiceFrom,
  headerData,
  invoiceTo,
  tableColumn,
  tableData,
  footerData,
} from "@/components/invoices/printable/printable-data";
export default function Printable() {
  return (
    <div className="bg-white rounded-lg m-4 p-4 dark:bg-dark">
      <div className="head">
        {headerData.map((data, index) => (
          <PrintableHeader
            key={index}
            icon={data.icon}
            title={data.title}
            name={data.name}
            edit={data.edit}
            invoiceNumber={data.invoiceNumber}
            number={data.number}
            invoiceDate={data.invoiceDate}
            date={data.date}
          />
        ))}
        <hr className="my-8" />
      </div>
      <div className="invoice_datials">
        {<PrintableDetails />}
        <hr className="my-8" />
      </div>
      <div>
       
        <PrintableTable />
        <hr className="my-8" />
      </div>
      <div className="invoice_footer">
        {footerData.map((item, index) => (
          <PrintableFooter
            key={index}
            title={item.title}
            desc={item.desc}
            printIcon={item.printIcon}
            print={item.print}
            send={item.send}
          />
        ))}
      </div>
    </div>
  );
}
