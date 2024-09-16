"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import LakeImg from "@/assets/product-detail/braies-lake.jpg";
import { Button } from "@material-tailwind/react";
import { Box, styled, Tab, Tabs } from "@mui/material";
import BasicInfo from "@/components/product-detail/basic-info";
import Pricing from "@/components/product-detail/pricing";
import Inventory from "@/components/product-detail/inventory";
import Shipping from "@/components/product-detail/shipping";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
}));

const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&.Mui-selected": {
      color: "#1890ff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

interface TabProps extends React.ComponentProps<typeof Tab> {
  label: string;
}

function a11yProps(index: number): Omit<TabProps, "label"> {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="py-10 container m-auto max-w-[1000px] space-y-3">
      <div className="flex gap-3 text-blue-600 text-sm font-medium">
        <Link href="/dashboard">Home</Link>
        <p>/</p>
        <Link href="/dashboard/product-detail">Product-Detail</Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={LakeImg}
              alt="lakeimg"
              className="w-[3.5rem] rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              A Walk Amongst Friends - Canvas Print
            </p>
            <p className="text-xs font-medium">Product Detail</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="text-white bg-[#00A4EF] hover:bg-[#0078D7] w-fit flex items-center py-2 gap-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Remove
          </Button>
          <Button className="text-white bg-[#00A4EF] hover:bg-[#0078D7]">
            Save
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4">
        <Box sx={{ width: "100%" }}>
          <Box>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              <StyledTab label="Basic Info" {...a11yProps(0)} />
              <StyledTab label="Product Images" {...a11yProps(1)} />
              <StyledTab label="Pricing" {...a11yProps(2)} />
              <StyledTab label="Inventory" {...a11yProps(3)} />
              <StyledTab label="Shipping" {...a11yProps(4)} />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BasicInfo />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Pricing />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Inventory />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Shipping />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default ProductDetail;
