import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../../components/user-form";

const EditUser = () => {
    const id = useParams()   
    console.log(id.id);
    useEffect(() => {
 
   }, [])
   
   return (
      <UserForm />
   );
};

export default EditUser;
