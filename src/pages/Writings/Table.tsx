import React from "react";

interface TeamData {
  name: string;
  threePointAttemptRate: number; // As a percentage (e.g., 40 for 40%)
}

interface TableProps{
    teams: any[];
    header: string;
}

const Table: React.FC<TableProps> = ({teams, header}) => {
  return (
    <div style={{ padding: "16px" }}>
      <div style={{ fontSize: "20px", fontWeight: "bold"}}>{header}</div>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid gray" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid gray", padding: "8px" }}>Position</th>
            <th style={{ border: "1px solid gray", padding: "8px" }}>Team</th>
            <th style={{ border: "1px solid gray", padding: "8px" }}>Three-Point Attempt Rate (%)</th>
          </tr>
        </thead>
        <tbody>
            {teams.map((team, index) => (
                <tr key={team.name} style={{ textAlign: "center" }}>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                    {team.position}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{team.name}</td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{team.threePointAttemptRate.toFixed(1)}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
