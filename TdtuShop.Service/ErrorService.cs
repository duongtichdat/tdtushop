using TdtuShop.Data.Infrastructure;
using TdtuShop.Data.Repositories;
using TdtuShop.Model.Models;

namespace TdtuShop.Service
{
    public interface IErrorService
    {
        Error Create(Error error);

        void Save();
    }

    public class ErrorService : IErrorService
    {
        private IErrorRepository _errorReporitory;
        private IUnitOfWork _unitOfWork;

        public ErrorService(IErrorRepository errorRepository, IUnitOfWork unitOfWork)
        {
            this._errorReporitory = errorRepository;
            this._unitOfWork = unitOfWork;
        }

        public Error Create(Error error)
        {
            return _errorReporitory.Add(error);
        }

        public void Save()
        {
            _unitOfWork.Commit();
        }
    }
}