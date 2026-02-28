import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const testimonials = [{
        id: 1,
        name: "张总监",
        company: "杭州时尚服饰有限公司",
        content: "耘尚AI的设计工具帮助我们团队效率提升了300%，大大缩短了产品开发周期。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20man%2C%20professional%20look%2C%20confident%20expression&sign=e78419e403253ae8c609b5b60c02c061"
    }, {
        id: 2,
        name: "李设计师",
        company: "上海潮流品牌工作室",
        content: "作为一名服装设计师，耘尚AI给了我无限的创作灵感，让设计过程变得更加高效和愉悦。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Fashion%20designer%2C%20creative%20expression%2C%20smiling&sign=d0d244282b5e266ae4369282443f6fd7"
    }, {
        id: 3,
        name: "王总裁",
        company: "广州服装集团",
        content: "引入耘尚AI解决方案后，我们的生产成本降低了25%，市场反应热烈，销售额显著增长。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20executive%2C%20serious%20expression%2C%20successful&sign=5c6f78c787a3ddef1d84b49faa5513f4"
    }, {
        id: 4,
        name: "陈经理",
        company: "深圳服装贸易公司",
        content: "通过耘尚AI的商业数据分析功能，我们准确把握了市场趋势，新品上市后销量提升了40%。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20woman%2C%20professional%20look%2C%20confident&sign=f6c7d79428c368be5e38b84e637b8a70"
    }, {
        id: 5,
        name: "林总监",
        company: "南京时尚电商平台",
        content: "耘尚AI的虚拟模特技术让我们的产品展示更加多样化，用户停留时间增加了50%，转化率提升明显。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=E-commerce%20director%2C%20smart%20expression%2C%20innovative&sign=1d3839bb0571555a38e06e5ef17f1d38"
    }, {
        id: 6,
        name: "赵设计师",
        company: "成都定制服装工作室",
        content: "AI辅助设计让我们能够快速响应客户个性化需求，定制周期从7天缩短到3天，客户满意度大幅提升。",
        avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Custom%20clothing%20designer%2C%20creative%2C%20passionate&sign=36d9ce95b7b397559655f8c6a58e74c0"
    }];

    const timeline = [{
        year: "2021",
        title: "公司成立",
        description: "耘尚AI在杭州成立，专注于AI技术在服装行业的应用"
    }, {
        year: "2022",
        title: "技术深耕",
        description: "自主研发的服装设计AI模型取得重大突破，参数化设计系统"
    }, {
        year: "2023-2024",
        title: "市场拓展",
        description: "与1001夜童装产业园合作，实现数据训练和采集"
    }, {
        year: "2025",
        title: "战略合作展",
        description: "与浙江理工大学服装学院达成战略合作，共建AI服装实验室"
    }, {
        year: "2026",
        title: "生态构建",
        description: "构建完整的AI服装产业生态系统，推出全流程解决方案"
    }];

    return (
        <div className="min-h-screen bg-white">
            {}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
                <div
                    className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {}
                    <></>
                    {}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-gray-900 font-medium">核心功能</a>
                        <a
                            href="#partners"
                            className="text-gray-600 hover:text-gray-900 font-medium"
                            style={{
                                fontFamily: "\"Noto Sans SC\", sans-serif"
                            }}>合作伙伴</a>
                        <a
                            href="#services"
                            className="text-gray-600 hover:text-gray-900 font-medium">技术服务</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">关于我们</a>
                        <></>
                    </nav>
                    {}
                    <button className="md:hidden text-gray-800 focus:outline-none">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </header>
            {}
            <section
                className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">用<span
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">AI赋能</span>
                                <br />服装产业未来
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">耘尚AI提供从设计到生产的全流程智能解决方案，帮助服装企业降本增效、创新突破。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <></>
                                <></>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%20technology%20clothing%20design%2C%20fashion%20industry%20digital%20transformation%2C%20modern%20technology%20concept&sign=8572d985f8ac9b792623a93583497ba9"
                                    alt="AI赋能服装产业"
                                    className="w-full h-auto rounded-xl shadow-xl" />
                                <></>
                                <></>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="features" className="py-20 px-4 md:px-0">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服装产业赋能功能</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">耘尚AI通过先进的人工智能技术和参数化设计技术，为服装产业提供全方位的智能解决方案</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                                <i className="fas fa-paint-brush text-blue-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">服装设计</h3>
                            <p className="text-gray-600">AI辅助设计系统，快速生成符合市场趋势的服装款式，激发设计师创意。</p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                                <i className="fas fa-cut text-purple-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">制版打样</h3>
                            <p className="text-gray-600">智能版型生成与优化，减少打样次数，提高生产效率，降低成本。</p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-14 h-14 rounded-lg bg-pink-100 flex items-center justify-center mb-6">
                                <i className="fas fa-camera text-pink-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">商拍广告</h3>
                            <p className="text-gray-600">虚拟模特与场景生成，降低商业拍摄成本，快速响应市场需求变化。</p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                                <i className="fas fa-video text-yellow-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">自媒体创作与发布</h3>
                            <p className="text-gray-600">AI生成营销内容，助力品牌社交媒体运营，提升品牌影响力。</p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                                <i className="fas fa-chart-bar text-green-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">商业数据分析</h3>
                            <p className="text-gray-600">市场趋势预测与消费者行为分析，辅助企业制定精准的商业决策。</p>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="partners" className="py-20 px-4 md:px-0 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">合作伙伴与资质</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">耘尚AI与行业领先机构和高校建立了紧密的合作关系
                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center">
                            <div
                                className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <i className="fas fa-university text-blue-500 text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">浙江理工大学服装学院</h3>
                            <p className="text-gray-600 mb-4">战略合作伙伴</p>
                            <p className="text-gray-700">共同建立AI服装创新实验室，推动产学研一体化发展，培养服装行业AI人才。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center">
                            <div
                                className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                                <i className="fas fa-graduation-cap text-purple-500 text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">新壹页服装设计培训机构</h3>
                            <p className="text-gray-600 mb-4">官方合作伙伴</p>
                            <p className="text-gray-700">联合开展AI服装设计师培训项目，帮助传统设计师掌握AI工具，提升设计效率。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center">
                            <div
                                className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                                <i className="fas fa-child text-pink-500 text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">1001夜童装供应链品牌</h3>
                            <p className="text-gray-600 mb-4">战略合作伙伴</p>
                            <p className="text-gray-700">共同开发儿童服装AI设计系统，打造智能化童装设计与生产流程，提升市场竞争力。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center">
                            <div
                                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                <i className="fas fa-share-alt text-green-500 text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">娲灵AI社交媒体矩阵营销SaaS平台</h3>
                            <p className="text-gray-600 mb-4">技术合作伙伴</p>
                            <p className="text-gray-700">整合AI内容生成与社交媒体营销，为服装品牌提供全方位的数字化营销解决方案。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                        </div>
                    </div>
                    {}
                    <div className="mt-20">
                        <></>
                        <></>
                    </div>
                </div>
            </section>
            {}
            <section id="services" className="py-20 px-4 md:px-0">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">技术服务</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">耘尚AI提供全方位的技术服务，满足不同企业的个性化需求
                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Private%20cloud%20deployment%2C%20data%20security%2C%20server%20room%2C%20technology%20concept&sign=91202af22bec993f7425f991765b8209"
                                    alt="私有化部署"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                                        <i className="fas fa-server text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">私有化部署</h3>
                                <p className="text-gray-600 mb-4">为企业提供本地私有化部署方案，确保数据安全与隐私，满足特定行业合规要求。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">本地化和云端服务器部署</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">数据加密与权限控制</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">定制化功能开发</span>
                                    </li>
                                </ul>
                                <></>
                            </div>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 relative">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Workflow%20automation%2C%20business%20process%20management%2C%20digital%20transformation&sign=e54d05f59b22c347c984f18f006694bb"
                                    alt="企业应用工作流开发"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                                        <i className="fas fa-project-diagram text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">企业应用工作流开发</h3>
                                <p className="text-gray-600 mb-4">根据企业现有业务流程，开发定制化的AI工作流解决方案，提升整体运营效率。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">业务流程分析与优化</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">自定义工作流设计</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">现有系统集成对接</span>
                                    </li>
                                </ul>
                                <></>
                            </div>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Database%20management%2C%20knowledge%20base%2C%20data%20analytics%20center&sign=4621cf7b83a4ebdeaf57c6df9e87be4d"
                                    alt="数据库知识库搭建"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                                        <i className="fas fa-database text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">数据库知识库搭建</h3>
                                <p className="text-gray-600 mb-4">构建企业专属的服装知识库和数据库，整合行业数据资源，为AI提供精准学习素材。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">行业数据采集与整理</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">知识库架构设计</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">智能检索与推荐系统</span>
                                    </li>
                                </ul>
                                <></>
                            </div>
                        </div>
                        {}
                        <div
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 relative">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20training%20workshop%2C%20coaching%20program%2C%20professional%20development&sign=e2cc8528a2f8fd62fe1c3b14721d8945"
                                    alt="培训陪跑"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                                        <i className="fas fa-chalkboard-teacher text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">培训陪跑</h3>
                                <p className="text-gray-600 mb-4">提供全方位的AI技术培训和项目落地陪跑服务，确保企业顺利实现数字化转型。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">定制化培训课程</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">技术专家一对一指导</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span className="text-gray-700">项目落地跟踪与优化</span>
                                    </li>
                                </ul>
                                <></>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="about" className="py-20 px-4 md:px-0 bg-gray-50">
                <div className="container mx-auto">
                    {}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">听听我们的客户怎么说
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map(testimonial => <div
                                key={testimonial.id}
                                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <div className="flex items-center space-x-4 mb-6">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover" />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">{testimonial.content}</p>
                                <div className="mt-6 flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                            </div>)}
                        </div>
                    </div>
                    {}
                    <div>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">耘尚AI的成长历程
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                        </div>
                        <div className="relative max-w-3xl mx-auto">
                            {}
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                            {}
                            {timeline.map((item, index) => <div
                                key={index}
                                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                                    <div
                                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h4>
                                        <h5 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h5>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500"></div>
                                <div className="w-1/2"></div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 lg:p-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">联系我们</h2>
                                <p className="text-white text-lg mb-8 opacity-90">无论您是想了解更多关于耘尚AI的产品和服务，还是有任何问题需要咨询，我们都很乐意听取您的声音。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                            <i className="fas fa-map-marker-alt text-white text-xl"></i>
                                        </div>
                                        <span className="text-white">杭州市上城区丰收湖时代大厦4幢403</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                            <i className="fas fa-phone text-white text-xl"></i>
                                        </div>
                                        <span className="text-white">400-888-9999</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                            <i className="fas fa-envelope text-white text-xl"></i>
                                        </div>
                                        <span className="text-white">zhangchi@aidugo.cn</span>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-xl font-semibold text-white mb-4">关注我们</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                                            <i className="fab fa-weixin text-white text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                                            <i className="fab fa-weibo text-white text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                                            <i className="fab fa-linkedin text-white text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 md:p-12 lg:p-16">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">发送咨询</h3>
                                <form
                                    className="space-y-6"
                                    onSubmit={e => {
                                        e.preventDefault();
                                        const name = e.currentTarget.name.value;
                                        const company = e.currentTarget.company.value;
                                        const email = e.currentTarget.email.value;
                                        const message = e.currentTarget.message.value;

                                        if (!name || !email || !message) {
                                            toast("请填写必填项：姓名、邮箱和咨询内容", {
                                                type: "error"
                                            });

                                            return;
                                        }

                                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                        if (!emailRegex.test(email)) {
                                            toast("请输入有效的邮箱地址", {
                                                type: "error"
                                            });

                                            return;
                                        }

                                        toast("正在提交咨询，请稍候...", {
                                            type: "info"
                                        });

                                        setTimeout(() => {
                                            const consultationData = {
                                                id: Date.now().toString(),
                                                name,
                                                company: company || "",
                                                email,
                                                message,
                                                timestamp: new Date().toISOString()
                                            };

                                            const existingData = localStorage.getItem("consultationData");
                                            const dataArray = existingData ? JSON.parse(existingData) : [];
                                            dataArray.push(consultationData);
                                            localStorage.setItem("consultationData", JSON.stringify(dataArray));

                                            toast("咨询提交成功！我们将尽快与您联系", {
                                                type: "success"
                                            });

                                            e.currentTarget.reset();
                                        }, 1500);
                                    }}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">姓名
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="请输入您的姓名"
                                                required />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="company">公司
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="请输入您的公司名称" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">邮箱
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="请输入您的邮箱地址"
                                            required />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">咨询内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="请详细描述您的需求或问题"
                                            required></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">提交咨询
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <></>
        </div>
    );
};

export default Home;