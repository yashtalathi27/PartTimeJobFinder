import { useNavigate } from "react-router-dom";
import UserTypeSelection from "../../components/auth/UserTypeSelection";

const UserSelectionPage = () => {
  const navigate = useNavigate();

  const handleUserTypeSelect = (userType) => {
    navigate("/auth/selection", { state: { userType } });
  };

  return <UserTypeSelection onSelectUserType={handleUserTypeSelect} />;
};

export default UserSelectionPage;
