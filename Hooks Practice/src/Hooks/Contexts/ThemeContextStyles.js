export const theme = (isDark) => ({
  backgroundColor: isDark ? "black" : "white",
  color: isDark ? "white" : "black",
  padding: "50px",
  margin: "50px",
  textAlign: "center",
  fontSize: "42px",
  border: "2px solid black",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const buttonStyle = (isDark) => ({
  padding: "12px 24px",
  backgroundColor: isDark ? "#222" : "#fff",
  color: isDark ? "white" : "black",
  border: "2px solid black",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  transition: "0.3s",
});
export const wrapperStyle = () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  gap: "20px",
});
