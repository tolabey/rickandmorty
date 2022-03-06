import React from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
import "./pagination.scss";

const DOTS = "dots";

interface PaginationProps {
  activeIndex: number;
  totalPages: number;
  setActiveIndex: (index: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { activeIndex, totalPages, setActiveIndex } = props;

  const getPaginationNumbers = () => {
    let renderArray: (number | string)[] = [];

    if (totalPages > 10) {
      if (activeIndex < 4 || activeIndex > totalPages - 4) {
        renderArray = [
          1,
          2,
          3,
          4,
          DOTS,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }

      if (activeIndex >= 4 && activeIndex <= totalPages - 4) {
        renderArray = [
          1,
          DOTS,
          activeIndex - 1,
          activeIndex,
          activeIndex + 1,
          DOTS,
          totalPages,
        ];
      }
    } else {
      renderArray = new Array(totalPages)
        .fill(undefined)
        .map((each, index) => index + 1);
    }

    return renderArray.map((item, index) => {
      if (item === DOTS) {
        return (
          <div className="pagination__dots" key={`${item + index}`}>
            ...
          </div>
        );
      }
      return (
        <button
          className={`pagination__index-button ${
            item === activeIndex ? "pagination__index-button--active" : ""
          }`}
          key={item}
          onClick={() => setSelectedPage(item as number)}
        >
          {item}
        </button>
      );
    });
  };

  const setSelectedPage = (item: number) => {
    window.scrollTo(0, 0);
    setActiveIndex(item);
  };

  return (
    <div className="pagination">
      <div
        className={`pagination__arrow ${
          activeIndex > 1 ? "pagination__arrow --active" : ""
        }`}
        onClick={() => {
          activeIndex > 1 && setSelectedPage(activeIndex - 1);
        }}
      >
        <div className="arrow-icon">
          <Arrow />
        </div>
        <div className="pagination__arrow__text"></div>
        <div className="pagination__arrow__text pagination__arrow__text--left">
          Prev
        </div>
      </div>

      {getPaginationNumbers()}

      <div
        className={`pagination__arrow ${
          activeIndex < totalPages ? "pagination__arrow --active" : ""
        }`}
        onClick={() => {
          activeIndex < totalPages && setSelectedPage(activeIndex + 1);
        }}
      >
        <div className="pagination__arrow__text pagination__arrow__text--right">
          Next
        </div>
        <div className="arrow-icon arrow-icon--rotate">
          <Arrow />
        </div>
      </div>
    </div>
  );
};
