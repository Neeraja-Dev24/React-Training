//Display current path
const CurrentPath = () => {
    const location = useLocation();
    return <div>Current Path: {location.pathname}</div>;
  };
//Access Location State
const ComponentA = () => {
    const navigate = useNavigate();
  
    return (
      <button onClick={() => navigate('/next-page', { state: { userId: 123 } })}>
        Go to Next Page
      </button>
    );
  };
  
  const ComponentB = () => {
    const location = useLocation();
  
    return (
      <div>
        <p>State Passed: {location.state?.userId}</p>
      </div>
    );
  };
// Detect Route Changes

const TrackRouteChanges = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

  return null;
};

//pathname: The current path of the URL (e.g., /about, /products).
// search: The query string (e.g., ?id=123).
// hash: The URL hash (e.g., #section1).
// state: The state object passed during navigation (optional).
// key: A unique identifier for the location entry.