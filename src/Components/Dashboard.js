import { useConversations } from "../Context/ConversationsProvider";
import OpenConversation from "./OpenConversation/OpenConversation";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = ({ id, setIsLoggedIn }) => {
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} setIsLoggedIn={setIsLoggedIn} />
      {selectedConversation && <OpenConversation />}
     
    </div>
  );
};

export default Dashboard;
