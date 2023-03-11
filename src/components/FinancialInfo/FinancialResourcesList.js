import { ResourceInfo } from "./ResourceInfo";

export const FinancialResourcesList = ({ resourcesList }) => {
  return (
    <div>
      {resourcesList.map((resource) => (
        <ResourceInfo key={resource.uuid} resourceInfo={resource} />
      ))}
    </div>
  );
};
