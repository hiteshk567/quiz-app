import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../UIElements/Card";
import Input from "../UIElements/Input";
import Button from "../UIElements/Button";
import LoadingSpinner from "../UIElements/LoadingSpinner";

const initialValue = {
  name: "",
  categoryId: 9,
};

const CategorySelection = ({
  categoryList,
  setUser,
  isLoading,
  setToDefault,
  setUserinfoToDefault,
}) => {
  const [formData, setFormData] = useState(initialValue);
  const history = useHistory();

  const handleChange = (event) => {
    setFormData((prevVal) => ({
      ...prevVal,
      name: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(formData.name);
    localStorage.setItem("quizStarted", "true");
    setFormData(initialValue);
    setToDefault();
    setUserinfoToDefault();
    history.push(`/category/${formData.categoryId}`);
  };

  const handleChangeCategory = (event) => {
    setFormData((prevVal) => ({
      ...prevVal,
      categoryId: event.target.value,
    }));
  };

  return (
    <Card className="entry-card">
      <form onSubmit={handleSubmit}>
        <h1>QUIZ FORM</h1>
        <hr />
        <Input
          id="name"
          placeholder="Enter your name..."
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <h4>SELECT QUIZ CATEGORY</h4>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div>
            <select onChange={handleChangeCategory}>
              {categoryList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {formData.name && (
          <Button inverse type="submit">
            PLAY QUIZ
          </Button>
        )}
      </form>
    </Card>
  );
};

export default CategorySelection;
