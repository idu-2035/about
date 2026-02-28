import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * 咨询数据展示页面
 * 用于查看用户通过表单提交的咨询信息
 */
interface ConsultationData {
  id: string;
  name: string;
  company?: string;
  email: string;
  message: string;
  timestamp: string;
}

const ConsultationDataPage: React.FC = () => {
  const [consultations, setConsultations] = useState<ConsultationData[]>([]);
  const [loading, setLoading] = useState(true);

  // 从localStorage加载咨询数据
  useEffect(() => {
    const loadConsultations = () => {
      try {
        const storedData = localStorage.getItem('consultationData');
        if (storedData) {
          const parsedData: ConsultationData[] = JSON.parse(storedData);
          // 按时间戳降序排序，最新的在前面
          setConsultations(parsedData.sort((a, b) => 
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          ));
        }
      } catch (error) {
        console.error('加载咨询数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    loadConsultations();
    
    // 添加存储事件监听器，以便在其他标签页更新数据时同步
    const handleStorageChange = () => {
      loadConsultations();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // 清空所有咨询数据
  const handleClearAll = () => {
    if (window.confirm('确定要清空所有咨询数据吗？此操作不可恢复。')) {
      localStorage.removeItem('consultationData');
      setConsultations([]);
    }
  };

  // 格式化日期时间
  const formatDateTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">耘尚AI - 咨询数据管理</h1>
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">返回首页</Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">正在加载咨询数据...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 页面头部 */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">耘尚AI - 咨询数据管理</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700 text-sm font-medium flex items-center justify-center sm:justify-start">
              <i className="fas fa-database mr-2"></i>
              总咨询数: {consultations.length}
            </div>
            <div className="flex space-x-2">
              <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex-1 sm:flex-none text-center">
                返回首页
              </Link>
              {consultations.length > 0 && (
                <button 
                  onClick={handleClearAll}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex-1 sm:flex-none text-center"
                >
                  清空数据
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {consultations.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-inbox text-blue-500 text-3xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">暂无咨询数据</h2>
            <p className="text-gray-600 mb-6">用户提交的咨询将显示在这里</p>
            <Link to="/" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              <i className="fas fa-arrow-left mr-2"></i>
              返回首页
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      提交时间
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      姓名
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      公司
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      邮箱
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      咨询内容
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {consultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDateTime(consultation.timestamp)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {consultation.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {consultation.company || '未提供'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href={`mailto:${consultation.email}`} className="text-blue-500 hover:underline">
                          {consultation.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                        {consultation.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} 耘尚AI - 咨询数据管理系统
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConsultationDataPage;