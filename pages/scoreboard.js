
import { useEffect, useState } from 'react';

export default function Scoreboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/submit')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Signup Scoreboard</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr><th>Email</th><th>Persona</th><th>Score</th><th>Submitted</th></tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <td>{entry.email}</td>
              <td>{entry.persona}</td>
              <td>{entry.score}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
