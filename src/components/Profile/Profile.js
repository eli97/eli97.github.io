import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustomTimeline";
import { PersonOutlineOutlined } from "@mui/icons-material";
import resumeData from "../../utils/resumeData";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import Timeline from "@mui/lab/Timeline";
import CustomButton from "../Button/Button.js";
import GetAppIcon from '@mui/icons-material/GetApp';
/*used rafce code snippet, creates a functional component
A functional component is an element returned from a JavaScript function*/

const CustomTimelineItem = ({ title, text, link }) => {
  return (
<Timeline className={"profile_timeline"} sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
    <TimelineItem className="custom_timeline_item" position="right" sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            {/*<span>{title}</span>{" "}*/}
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
    </Timeline>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <figure className="profile_image">
        <img src={require("../../assets/images/picofme.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlined />} title={resumeData.name}/>
    
        <CustomTimelineItem title="Title: " text={resumeData.title} />
        {Object.keys(resumeData.socials).map((key) => (
          <CustomTimelineItem
            title={key}
            text={resumeData.socials[key].text}
            link={resumeData.socials[key].link}
          />
        ))}
        <br />
        <div className='button_container'>
        <CustomButton text={"Download Cv"} icon={<GetAppIcon />}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;