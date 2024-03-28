import sprite from "../../../assets/sprite.svg";
import {
  CircleBox,
  FirstLetterText,
  IconsWrapper,
  NameText,
  ReviewerItem,
  ReviewerNameBox,
  ReviewerText,
} from "./Reviews.styled";

/* eslint-disable react/prop-types */
export const Reviews = ({ value: { reviews } }) => {
  const yellowStar = (
    <svg width="16px" height="16px">
      <use xlinkHref={sprite + "#yellow-star"} />
    </svg>
  );

  const greyStar = (
    <svg width="16px" height="16px">
      <use xlinkHref={sprite + "#grey-star"} />
    </svg>
  );

  const raiting = (data) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < data) {
        stars.push(<span key={i}>{yellowStar}</span>);
      } else {
        stars.push(<span key={i}>{greyStar}</span>);
      }
    }

    return <IconsWrapper>{stars}</IconsWrapper>;
  };

  return (
    <>
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <ReviewerItem key={reviewer_name}>
            <ReviewerNameBox>
              <CircleBox>
                <FirstLetterText>{reviewer_name.charAt(0)}</FirstLetterText>
              </CircleBox>
              <div>
                <NameText>{reviewer_name}</NameText>
                {raiting(reviewer_rating)}
              </div>
            </ReviewerNameBox>
            <ReviewerText>{comment}</ReviewerText>
          </ReviewerItem>
        ))}
      </ul>
    </>
  );
};
