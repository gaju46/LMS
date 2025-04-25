import React from "react";
import { ProfileContext } from "../providers/ProfileProvider";

export const useProfile = () => React.useContext(ProfileContext)
