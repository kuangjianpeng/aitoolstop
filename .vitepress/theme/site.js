export function mountSite() {
  if (document.documentElement.dataset.siteMounted === 'true') return;
  if (!document.querySelector('.page-shell')) return;
  document.documentElement.dataset.siteMounted = 'true';

  const favIcon = domain => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    const logoOverrides = {
      'Canva可画': '/assets/logos/canva.svg',
      'Tome': '/assets/logos/tome.svg',
      '通义听悟': '/assets/logos/tingwu.svg',
      '火山写作': '/assets/logos/huoshan-writing.svg',
      '新华妙笔': '/assets/logos/xinhua-miaobi.svg',
      '通义千问': '/assets/logos/tongyi-qianwen.webp',
      '腾讯交互翻译': '/assets/logos/tencent-transmart.svg'
    };
    const toolLogo = (name, domain) => logoOverrides[name] || favIcon(domain);
    const models = [
      ['DeepSeek','深度推理','deepseek.com','/models/deepseek.html'],['豆包','全能助手','doubao.com','/models/doubao.html'],['Kimi','长文本阅读','kimi.com','https://www.kimi.com/'],['通义千问','通用对话','tongyi.com','https://tongyi.aliyun.com/'],['腾讯元宝','混元助手','yuanbao.tencent.com','https://yuanbao.tencent.com/'],['文心一言','百度大模型','yiyan.baidu.com','https://yiyan.baidu.com/'],['ChatGPT','OpenAI','openai.com','https://chatgpt.com/'],['Claude','长文本推理','claude.ai','https://claude.ai/'],['Gemini','Google AI','gemini.google.com','https://gemini.google.com/'],['Grok','实时信息','x.ai','https://grok.com/']
    ];
    const sections = [
      {id:'video',icon:'clapperboard',title:'AI视频工具',desc:'视频生成、数字人、智能剪辑与口播制作',tools:[
        ['即梦AI','图片与视频创作','jimeng.jianying.com','https://jimeng.jianying.com/','中文提示词友好的图像与视频生成平台','国内'],['可灵AI','视频生成','klingai.com','https://app.klingai.com/cn/','高质量文生视频与图生视频平台','国内'],['Vidu','视频生成','vidu.cn','https://www.vidu.cn/','生数科技推出的AI视频生成平台','国内'],['海螺AI','视频生成','hailuoai.com','https://hailuoai.com/','支持文本和图片快速生成创意视频','国内'],['Runway','专业视频生成','runwayml.com','https://runwayml.com/','专业级AI视频生成与创意编辑平台','海外'],['Pika','视频与特效','pika.art','https://pika.art/','轻量有趣的AI视频与特效工具','海外'],['剪映','智能剪辑','capcut.cn','https://www.capcut.cn/','集剪辑、字幕和AI创作为一体','国内'],['有言','数字人视频','youyan3d.com','https://www.youyan3d.com/','在线生成3D数字人视频与演示','国内'],['蝉镜','数字人口播','chanjing.cc','https://www.chanjing.cc/','营销场景数字人视频制作平台','国内'],['HeyGen','数字人与翻译','heygen.com','https://www.heygen.com/','数字人、口播和视频翻译平台','海外'],['Luma','创意视频','lumalabs.ai','https://lumalabs.ai/','Dream Machine创意视频生成','海外'],['Sora','视频模型','openai.com','https://sora.com/','OpenAI推出的视频生成产品','海外']
      ]},
      {id:'image',icon:'image',title:'AI图像工具',desc:'AI绘画、图片编辑、商品图与视觉设计',tools:[
        ['即梦AI','AI绘画','jimeng.jianying.com','https://jimeng.jianying.com/','中文语义理解自然的图片生成工具','国内'],['Midjourney','AI绘画','midjourney.com','https://www.midjourney.com/','高质量艺术与商业视觉生成平台','海外'],['通义万相','创意图像','tongyi.aliyun.com','https://tongyi.aliyun.com/wanxiang/','阿里旗下图片与视频创意平台','国内'],['LiblibAI','模型与创作','liblib.art','https://www.liblib.art/','国内AI模型分享和在线创作社区','国内'],['稿定AI','商业设计','gaoding.com','https://www.gaoding.com/ai','面向营销、电商和新媒体的AI设计','国内'],['Canva可画','在线设计','canva.cn','https://www.canva.cn/','图片、海报与演示一站式设计','国内'],['Adobe Firefly','创意生成','adobe.com','https://firefly.adobe.com/','Adobe旗下商业设计生成式AI','海外'],['Ideogram','文字海报','ideogram.ai','https://ideogram.ai/','擅长文字排版与海报图像生成','海外'],['Recraft','矢量与图标','recraft.ai','https://www.recraft.ai/','适合品牌、图标与矢量素材创作','海外'],['Remove.bg','智能抠图','remove.bg','https://www.remove.bg/','快速移除图片背景','海外'],['Magnific','高清放大','magnific.ai','https://magnific.ai/','通过AI提升图片细节和清晰度','海外'],['PhotoRoom','商品图','photoroom.com','https://www.photoroom.com/','电商商品图与背景生成平台','海外']
      ]},
      {id:'writing',icon:'pen-line',title:'AI写作工具',desc:'文章、营销文案、论文与内容润色',tools:[
        ['秘塔写作猫','中文写作','xiezuocat.com','https://xiezuocat.com/','中文改写、纠错和内容生成助手','国内'],['新华妙笔','公文写作','miaobi.xinhuaskl.com','https://miaobi.xinhuaskl.com/','面向政企用户的公文写作平台','国内'],['笔灵AI','内容写作','ibiling.cn','https://ibiling.cn/','覆盖多种中文内容场景的写作助手','国内'],['讯飞绘文','新媒体写作','turbodesk.xfyun.cn','https://turbodesk.xfyun.cn/','选题、配图与内容生成工作台','国内'],['Notion AI','文档写作','notion.so','https://www.notion.so/product/ai','集成在知识库中的智能写作助手','海外'],['Jasper','营销文案','jasper.ai','https://www.jasper.ai/','面向营销团队的品牌内容生成平台','海外'],['Copy.ai','销售文案','copy.ai','https://www.copy.ai/','销售与营销工作流自动化平台','海外'],['QuillBot','英文润色','quillbot.com','https://quillbot.com/','英文改写、语法检查与摘要工具','海外'],['Grammarly','英文写作','grammarly.com','https://www.grammarly.com/','英文语法、语气和表达优化助手','海外'],['火山写作','智能写作','writingo.net','https://www.writingo.net/','面向中文创作的AI写作工具','国内'],['蛙蛙写作','小说创作','wawawriter.com','https://www.wawawriter.com/','辅助小说和故事创作的写作平台','国内'],['Rytr','多语言文案','rytr.me','https://rytr.me/','轻量多语言内容生成工具','海外']
      ]},
      {id:'office',icon:'presentation',title:'AI办公工具',desc:'PPT、文档、表格、会议与知识管理',tools:[
        ['Gamma','AI演示','gamma.app','https://gamma.app/','从主题快速生成演示、文档与网页','海外'],['AiPPT','智能PPT','aippt.cn','https://www.aippt.cn/','中文内容一键生成完整PPT','国内'],['讯飞智文','PPT与文档','zhiwen.xfyun.cn','https://zhiwen.xfyun.cn/','讯飞推出的文档和演示生成平台','国内'],['WPS AI','智能办公','wps.cn','https://ai.wps.cn/','文档、表格和演示中的AI助手','国内'],['飞书智能伙伴','协同办公','feishu.cn','https://www.feishu.cn/','企业协作与知识管理智能助手','国内'],['Microsoft Copilot','办公助手','microsoft.com','https://copilot.microsoft.com/','微软生态中的通用AI办公助手','海外'],['Tome','叙事演示','tome.app','https://tome.app/','适合故事化表达的AI演示工具','海外'],['Napkin AI','信息图','napkin.ai','https://www.napkin.ai/','将文字快速转为信息图和示意图','海外'],['NotebookLM','资料研究','notebooklm.google','https://notebooklm.google/','基于个人资料的研究和播客助手','海外'],['通义听悟','会议转写','tingwu.aliyun.com','https://tingwu.aliyun.com/','音视频转写、总结与内容提炼','国内'],['Otter','会议记录','otter.ai','https://otter.ai/','英文会议转写与行动项总结','海外'],['ChatExcel','表格处理','chatexcel.com','https://chatexcel.com/','通过自然语言处理Excel表格','国内']
      ]},
      {id:'coding',icon:'code-2',title:'AI编程工具',desc:'代码生成、智能IDE、应用开发与自动化',tools:[
        ['TRAE','AI原生IDE','trae.ai','https://www.trae.ai/','支持项目级理解与智能编码','国内'],['Cursor','AI代码编辑器','cursor.com','https://www.cursor.com/','深度集成AI能力的代码编辑器','海外'],['GitHub Copilot','代码助手','github.com','https://github.com/features/copilot','GitHub推出的AI编程助手','海外'],['通义灵码','代码助手','tongyi.aliyun.com','https://tongyi.aliyun.com/lingma','阿里推出的智能编码助手','国内'],['文心快码','代码助手','baidu.com','https://comate.baidu.com/','百度推出的企业级AI编程助手','国内'],['CodeBuddy','智能开发','cloud.tencent.com','https://copilot.tencent.com/','腾讯云推出的AI代码助手','国内'],['v0','前端生成','v0.dev','https://v0.dev/','通过自然语言生成可用前端界面','海外'],['Bolt','全栈开发','bolt.new','https://bolt.new/','在浏览器中生成并运行全栈应用','海外'],['Lovable','应用生成','lovable.dev','https://lovable.dev/','通过对话创建和迭代Web应用','海外'],['Replit Agent','应用开发','replit.com','https://replit.com/ai','从需求到部署的智能开发平台','海外'],['Codeium','代码补全','codeium.com','https://codeium.com/','免费的AI代码补全与聊天工具','海外'],['Tabnine','企业编码','tabnine.com','https://www.tabnine.com/','强调隐私和企业安全的代码助手','海外']
      ]},
      {id:'audio',icon:'audio-lines',title:'AI音频工具',desc:'音乐生成、语音合成、配音与音频处理',tools:[
        ['Suno','AI音乐','suno.com','https://suno.com/','通过描述生成带人声的完整歌曲','海外'],['网易天音','中文音乐','tianyin.music.163.com','https://tianyin.music.163.com/','网易推出的一站式AI音乐创作平台','国内'],['ElevenLabs','语音合成','elevenlabs.io','https://elevenlabs.io/','自然逼真的多语言语音生成平台','海外'],['讯飞智作','配音数字人','peiyin.xunfei.cn','https://peiyin.xunfei.cn/','中文配音和数字人内容制作','国内'],['Adobe Podcast','音频增强','podcast.adobe.com','https://podcast.adobe.com/','在线提升人声清晰度和录音质量','海外'],['Riffusion','音乐生成','riffusion.com','https://www.riffusion.com/','通过文本生成音乐和歌曲片段','海外']
      ]},
      {id:'design',icon:'palette',title:'AI设计工具',desc:'品牌视觉、UI设计、海报、电商图与设计协作工具',tools:[
        ['Figma AI','设计协作','figma.com','https://www.figma.com/','产品界面设计、协作与AI辅助设计平台','海外'],['Canva可画','在线设计','canva.cn','https://www.canva.cn/','海报、PPT、社媒图与品牌物料设计工具','国内'],['稿定AI','商业设计','gaoding.com','https://www.gaoding.com/ai','面向电商、营销与新媒体的AI设计平台','国内'],['即时设计AI','UI设计','js.design','https://js.design/','国产在线UI设计与协作工具','国内'],['MasterGo AI','产品设计','mastergo.com','https://mastergo.com/','产品团队在线设计、原型与设计交付平台','国内'],['Adobe Firefly','创意生成','adobe.com','https://firefly.adobe.com/','Adobe旗下商业可用的生成式AI创意工具','海外'],['Recraft','矢量图标','recraft.ai','https://www.recraft.ai/','适合品牌、图标、插画与矢量素材生成','海外'],['Khroma','配色灵感','khroma.co','https://www.khroma.co/','基于AI生成和筛选品牌配色方案','海外']
      ]},
      {id:'search',icon:'search',title:'AI搜索引擎',desc:'联网问答、学术检索、资料聚合与答案溯源',tools:[
        ['秘塔AI搜索','中文搜索','metaso.cn','https://metaso.cn/','面向中文资料检索与总结的AI搜索引擎','国内'],['Perplexity','答案搜索','perplexity.ai','https://www.perplexity.ai/','支持引用来源的AI问答搜索工具','海外'],['Kimi探索版','联网搜索','kimi.com','https://www.kimi.com/','适合长文资料整理和联网信息查询','国内'],['DeepSeek','推理搜索','deepseek.com','https://chat.deepseek.com/','适合复杂问题推理和资料辅助分析','国内'],['通义AI搜索','智能搜索','tongyi.aliyun.com','https://tongyi.aliyun.com/','阿里通义生态内的AI搜索与问答能力','国内'],['天工AI搜索','搜索问答','tiangong.cn','https://www.tiangong.cn/','昆仑万维推出的AI搜索与内容助手','国内'],['Consensus','学术搜索','consensus.app','https://consensus.app/','面向论文结论提炼的AI学术搜索工具','海外'],['You.com','AI搜索','you.com','https://you.com/','集搜索、聊天和写作于一体的AI搜索平台','海外']
      ]},
      {id:'agent',icon:'bot',title:'AI智能体',desc:'自动执行任务、搭建工作流、多智能体协作与浏览器代理',tools:[
        ['扣子 Coze','智能体平台','coze.cn','https://www.coze.cn/','字节旗下智能体搭建与发布平台','国内'],['Dify','AI应用开发','dify.ai','https://dify.ai/','开源LLM应用和智能体工作流平台','国内'],['腾讯元器','智能体平台','yuanqi.tencent.com','https://yuanqi.tencent.com/','腾讯推出的智能体创建和分发平台','国内'],['FastGPT','知识库智能体','fastgpt.in','https://fastgpt.in/','适合知识库问答和企业智能体搭建','国内'],['Zapier Agents','自动化代理','zapier.com','https://zapier.com/agents','连接应用并自动执行任务的AI代理','海外'],['Manus','通用智能体','manus.im','https://manus.im/','面向复杂任务执行的通用AI智能体','海外']
      ]},
      {id:'learning',icon:'graduation-cap',title:'AI学习工具',desc:'语言学习、知识问答、课程总结、论文阅读与考试辅助',tools:[
        ['Khanmigo','学习导师','khanacademy.org','https://www.khanacademy.org/khan-labs','可汗学院推出的AI学习导师','海外'],['Duolingo Max','语言学习','duolingo.com','https://www.duolingo.com/max','支持角色扮演和解释答案的AI语言学习','海外'],['Quizlet','学习卡片','quizlet.com','https://quizlet.com/','用AI生成学习卡片、测验与复习资料','海外'],['学而思九章','学习助手','xueersi.com','https://www.xueersi.com/','面向学生学习场景的AI辅助工具','国内'],['夸克学习','学习搜索','quark.cn','https://www.quark.cn/','资料搜索、拍照解题与学习辅助','国内'],['有道小P','语言学习','youdao.com','https://www.youdao.com/','网易有道推出的AI学习与翻译助手','国内'],['Explainpaper','论文阅读','explainpaper.com','https://www.explainpaper.com/','帮助解释论文段落和复杂概念','海外'],['Elicit','研究助手','elicit.com','https://elicit.com/','用于论文检索、研究问题拆解和文献整理','海外']
      ]},
      {id:'translate',icon:'languages',title:'AI翻译工具',desc:'多语言翻译、文档翻译、视频字幕与本地化处理',tools:[
        ['DeepL','高质量翻译','deepl.com','https://www.deepl.com/translator','擅长自然语气和专业文本翻译','海外'],['有道翻译','中文翻译','fanyi.youdao.com','https://fanyi.youdao.com/','网易有道多语言文本、文档和拍照翻译','国内'],['百度翻译','通用翻译','fanyi.baidu.com','https://fanyi.baidu.com/','支持文本、文档和网页多语种翻译','国内'],['腾讯交互翻译','智能翻译','transmart.qq.com','https://transmart.qq.com/','腾讯推出的AI辅助翻译平台','国内'],['沉浸式翻译','网页翻译','immersivetranslate.com','https://immersivetranslate.com/','浏览器双语网页、PDF和字幕翻译插件','国内'],['Google Translate','多语言翻译','translate.google.com','https://translate.google.com/','覆盖语种丰富的通用翻译工具','海外']
      ]},
      {id:'opensource',icon:'github',title:'开源AI项目',desc:'大模型、图像生成、语音、Agent、向量数据库与开发框架',tools:[
        ['Hugging Face','模型社区','huggingface.co','https://huggingface.co/','全球AI模型、数据集和应用社区','海外'],['Ollama','本地模型','ollama.com','https://ollama.com/','在本地运行和管理开源大模型','海外'],['Llama.cpp','本地推理','github.com','https://github.com/ggerganov/llama.cpp','轻量级本地大模型推理项目','海外'],['LangChain','应用框架','langchain.com','https://www.langchain.com/','构建LLM应用和Agent工作流的开发框架','海外'],['LlamaIndex','知识库框架','llamaindex.ai','https://www.llamaindex.ai/','连接私有数据和大模型的RAG框架','海外'],['ComfyUI','图像工作流','github.com','https://github.com/comfyanonymous/ComfyUI','节点式AI图像生成工作流工具','海外'],['Stable Diffusion WebUI','图像生成','github.com','https://github.com/AUTOMATIC1111/stable-diffusion-webui','经典开源AI绘画Web界面','海外'],['Fooocus','图像生成','github.com','https://github.com/lllyasviel/Fooocus','更易上手的AI绘画生成工具','海外'],['Whisper','语音识别','github.com','https://github.com/openai/whisper','OpenAI开源语音识别模型','海外'],['RAGFlow','知识库问答','ragflow.io','https://ragflow.io/','开源RAG知识库和文档问答系统','国内'],['QAnything','知识库问答','github.com','https://github.com/netease-youdao/QAnything','网易有道开源的本地知识库问答系统','国内'],['MaxKB','知识库问答','fit2cloud.com','https://maxkb.cn/','开源企业级知识库问答系统','国内'],['FastGPT','AI应用平台','github.com','https://github.com/labring/FastGPT','开源知识库问答和AI应用搭建平台','国内'],['Dify','LLM应用平台','github.com','https://github.com/langgenius/dify','开源AI应用开发与工作流平台','国内'],['AutoGen','多智能体','github.com','https://github.com/microsoft/autogen','微软开源的多智能体应用框架','海外'],['CrewAI','多智能体','github.com','https://github.com/crewAIInc/crewAI','用于构建多角色AI团队的开源框架','海外'],['Milvus','向量数据库','milvus.io','https://milvus.io/','开源向量数据库，适合AI检索和RAG','国内'],['Open WebUI','本地聊天','github.com','https://github.com/open-webui/open-webui','适配本地模型的开源聊天界面','海外']
      ]}
    ];

    const modelGrid = document.getElementById('modelGrid');
    modelGrid.innerHTML = models.map(([name,type,domain,url]) => `<a class="model-item" href="${url}" ${url.startsWith('/') ? '' : 'target="_blank" rel="noopener"'} data-search="${name} ${type}"><span class="logo"><img src="${toolLogo(name, domain)}" alt="" onerror="this.parentElement.classList.add('fallback');this.remove()"></span><span class="model-info"><strong>${name}</strong><span>${type}</span></span></a>`).join('');

    const toolSections = document.getElementById('toolSections');
    toolSections.innerHTML = sections.map(section => `<section class="tool-section" id="${section.id}" data-tool-section><div class="section-head"><div class="section-title"><span class="section-title-icon"><i data-lucide="${section.icon}"></i></span><div><h2>${section.title}</h2><p>${section.desc}</p></div></div><a class="section-link" href="#">查看全部<i data-lucide="arrow-right"></i></a></div><div class="tool-grid">${section.tools.map(([name,type,domain,url,desc,region]) => `<article class="tool-card" data-search="${name} ${type} ${desc}"><div class="tool-card-top"><span class="logo"><img src="${toolLogo(name, domain)}" alt="" onerror="this.parentElement.classList.add('fallback');this.remove()"></span><div class="tool-name"><h3>${name}</h3><span>${type}</span></div><button class="fav-btn" type="button" aria-label="收藏${name}"><i data-lucide="heart"></i></button></div><p class="tool-desc">${desc}</p><div class="tool-card-bottom"><span class="tool-status ${region === '海外' ? 'overseas' : ''}">${region === '海外' ? '海外工具' : '国内直达'}</span><a class="visit-link" href="${url}" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></div></article>`).join('')}<div class="empty-state">该分类暂无匹配工具</div></div></section>`).join('');

    const searchInput = document.getElementById('searchInput');
    function runSearch() {
      const keyword = searchInput.value.trim().toLowerCase();
      let firstMatch = null;
      document.querySelectorAll('[data-search]').forEach(item => {
        const show = !keyword || item.dataset.search.toLowerCase().includes(keyword);
        item.style.display = show ? '' : 'none';
        if (show && keyword && !firstMatch) firstMatch = item;
      });
      document.querySelectorAll('[data-tool-section]').forEach(section => {
        const cards = [...section.querySelectorAll('.tool-card')];
        const visible = cards.filter(card => card.style.display !== 'none').length;
        section.querySelector('.empty-state').style.display = keyword && !visible ? 'block' : 'none';
        section.style.display = keyword && !visible ? 'none' : '';
      });
      document.querySelector('.model-section').style.display = keyword && ![...document.querySelectorAll('.model-item')].some(item => item.style.display !== 'none') ? 'none' : '';
      if (keyword && firstMatch) firstMatch.scrollIntoView({behavior:'smooth',block:'center'});
    }

    document.getElementById('searchForm').addEventListener('submit', event => { event.preventDefault(); runSearch(); });
    searchInput.addEventListener('input', runSearch);
    document.querySelectorAll('.search-hints button').forEach(button => button.addEventListener('click', () => { searchInput.value = button.textContent; runSearch(); }));

    document.addEventListener('click', event => {
      const button = event.target.closest('.fav-btn');
      if (!button) return;
      button.classList.toggle('active');
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      const icon = button.querySelector('svg');
      if (icon) icon.setAttribute('fill', button.classList.contains('active') ? 'currentColor' : 'none');
    });

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      document.documentElement.dataset.theme = dark ? '' : 'dark';
      themeToggle.innerHTML = `<i data-lucide="${dark ? 'moon' : 'sun'}"></i>`;
      window.lucide?.createIcons({attrs:{'stroke-width':1.8}});
    });

    const observed = [...document.querySelectorAll('#models,[data-tool-section],#new,#ranking,#guides,#submit')];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.side-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), {rootMargin:'-90px 0px -72% 0px'});
    observed.forEach(section => observer.observe(section));
    window.lucide?.createIcons({attrs:{'stroke-width':1.8}});

}

