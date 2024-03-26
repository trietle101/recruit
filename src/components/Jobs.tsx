import Card from "./Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { getJobs } from "../redux/actions/jobsActionThunk";
import { RootState, AppDispatch } from "../redux/store";

export type Job = {
  img: string;
  tittle: string;
  company: string;
  description: string;
};

function Jobs({ itemsPerPage }: { itemsPerPage: number }) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  const { jobs } = useSelector((state: RootState) => state.jobs);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = [];
  currentItems = jobs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="jobs">
      <div className="jobs-container">
        {currentItems &&
          currentItems.map((job, index) => <Card key={index} job={job} />)}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={"assets/icons/chevron-right.png"} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<img src={"assets/icons/chevron-left.png"} />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
      />
    </div>
  );
}

export default Jobs;
