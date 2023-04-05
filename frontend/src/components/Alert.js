import Alert from 'react-bootstrap/Alert';

function Alertt() {
  return (
    <>
      {/* {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => ( */}
        <Alert key={"success"} variant="success">
         Login successfull
        </Alert>
      {/* ))} */}
    </>
  );
}

export default Alertt;