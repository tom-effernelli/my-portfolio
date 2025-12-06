const Timestamp = ({ className = "relative leading-[121.1%] font-light lg:text-[22px]" }) => {
  const timestamp = Date.now().toString();
  const formattedTimestamp = timestamp.length > 16 ? timestamp.slice(-16) : timestamp.padStart(16, '0');
  
  return (
    <div className={className}>
      {formattedTimestamp}
    </div>
  );
};

export default Timestamp;

