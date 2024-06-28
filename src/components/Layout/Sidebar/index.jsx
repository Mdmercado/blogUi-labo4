import { Card, List, ListItem, Title } from "@tremor/react";
import useStore from "../../../store/useStore";

const Sidebar = () => {
  const users = useStore((state) => state.users);
  const user = useStore((state) => state.user);

  // Get the top 5 users
  const topUsers = users.slice(0, 5);

  return (
    <Card className="w-full h-full bg-gray-200 p-4 shadow-lg">
      <Title>Top 5 Colaboradores al blog</Title>
      {user ? (
        topUsers.length > 0 ? (
          <List className="mt-2">
            {topUsers.map((user) => (
              <ListItem key={user.userId}>
                <span>{user.nameUser}</span>
                <span>({user.username})</span>
              </ListItem>
            ))}
          </List>
        ) : (
          <p>No hay usuarios activos</p>
        )
      ) : (
        <p>Inicia sesión para ver los colaboradores del blog</p>
      )}
    </Card>
  );
};

export default Sidebar;
