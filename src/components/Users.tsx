import { Card } from "./Card";

export const Users = ({ data }: any) => {
  return (
    <section>
      {data?.map((user: any) => (
        <Card user={user} />
      ))}
    </section>
  );
};
