function Error({ message, show }: { message: string; show: string }) {
  return (
    <div className={`error ${show}`}>
      <img src="assets/icons/alert-circle.png" alt="Error" />
      <p>{message}</p>
    </div>
  );
}

export default Error;
