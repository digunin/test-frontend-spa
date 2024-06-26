import React, { FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DBTableRow, { TRProps } from "./DBTableRow";

const DBTableRowExpandable: FC<TRProps> = (props) => {
  const { row, inputFields } = props;
  return (
    <Accordion defaultExpanded={!row || !!inputFields}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${row?.employeeNumber || "new-row"}-content`}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.06)",
        }}
      >
        <Typography>{row ? row.employeeNumber : "Новая запись"}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DBTableRow {...props} />
      </AccordionDetails>
    </Accordion>
  );
};

export default DBTableRowExpandable;
