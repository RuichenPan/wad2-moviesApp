import React, { useContext } from "react";
import {ActorsContext} from "../../contexts/actorsContext";

const AddToILikeButton = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleAddToILike = e => {
    e.preventDefault();
    context.addToILike(actor.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToILike}
    >
      Add to I Like
    </button>
  );
};

export default AddToILikeButton;