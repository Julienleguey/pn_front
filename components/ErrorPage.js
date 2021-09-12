const ErrorPage = ({ error }) => {
  return (
    <div className="flex-1 minh-100vh d-flex jc-center ai-center">
      <h4 className="text-center">
        {error.statusCode} | {error.message}
      </h4>
    </div>
  );
};

export default ErrorPage;
