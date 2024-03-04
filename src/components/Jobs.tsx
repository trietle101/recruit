import Card from "./Card";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export type Job = {
  img: string;
  tittle: string;
  company: string;
  description: string;
};

const jobs: Array<Job> = [
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/alta.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Group",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/unigons.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Unigons",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/software.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Software",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/Plastics.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Plastic",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  },
  {
    img: "src/assets/images/media.png",
    tittle: "Thiết kế UI/UX (Figma)",
    company: "Alta Media",
    description: "Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript"
  }
];

function Jobs({ itemsPerPage }: { itemsPerPage: number }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = jobs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="jobs">
      <div className="jobs-container">
        {currentItems.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={"src/assets/icons/chevron-right.png"} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<img src={"src/assets/icons/chevron-left.png"} />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
      />
    </div>
  );
}

export default Jobs;
