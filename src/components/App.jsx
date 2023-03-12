const App = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cantarell',
        fontSize: 40,
        backgroundColor: '#c6cbf8',
        color: '#010101',
      }}
    >
      {children}
    </div>
  );
};

export default App;
