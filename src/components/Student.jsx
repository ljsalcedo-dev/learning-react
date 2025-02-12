export default function Student({ children, name, age, isStudent = true }) {
  return (
    <>
      <div className="student">
        {name && <p>Name: {name}</p>}
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
        {children}
      </div>
    </>
  );
}
