import "./CustomTimeline.css";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";


const CustomTimeline = ({ title, icon }) => {
    return (
        <Timeline className={"timeline"} sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
            {/*Item Header */}
            <TimelineItem className={"timeline_firstItem"}>
              <TimelineSeparator>
                    <TimelineDot className={"timeline_dot_header"}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className={"timeline_header"}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={"separator_padding"}>
        <TimelineConnector />
        <TimelineDot variant={'outlined'} className={"timeline_dot"} />
    </TimelineSeparator>
);

export default CustomTimeline;
