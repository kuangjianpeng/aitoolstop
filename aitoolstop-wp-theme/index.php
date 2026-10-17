<?php
/**
 * 精选AI工具首页模板
 */

get_header();
?>
<div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="精选AI工具首页"><span class="brand-mark"><i data-lucide="sparkles"></i></span><span>精选AI工具</span></a>
      <nav class="top-nav" aria-label="主导航"><a class="active" href="#top">首页</a><a href="#models">AI模型</a><a href="#video">AI工具</a><a href="#ranking">排行榜</a><a href="#submit">提交收录</a></nav>
      <div class="top-actions"><button class="icon-btn" id="themeToggle" type="button" aria-label="切换深色模式"><i data-lucide="moon"></i></button><button class="outline-btn" type="button"><i data-lucide="heart"></i>我的收藏</button><a class="primary-btn" href="#submit"><i data-lucide="plus"></i>提交工具</a></div>
    </header>

    <nav class="mobile-categories" aria-label="移动端分类"><a href="#models">AI模型</a><a href="#video">AI视频</a><a href="#image">AI图像</a><a href="#writing">AI写作</a><a href="#office">AI办公</a><a href="#coding">AI编程</a><a href="#audio">AI音频</a></nav>

    <div class="workspace">
      <aside class="sidebar">
        <div class="side-label">工具分类</div>
        <nav class="side-nav">
          <a class="side-link active" href="#models"><i data-lucide="brain-circuit"></i><span>AI模型入口</span><small>10</small></a>
          <a class="side-link" href="#video"><i data-lucide="clapperboard"></i><span>AI视频工具</span><small>12</small></a>
          <a class="side-link" href="#image"><i data-lucide="image"></i><span>AI图像工具</span><small>12</small></a>
          <a class="side-link" href="#writing"><i data-lucide="pen-line"></i><span>AI写作工具</span><small>12</small></a>
          <a class="side-link" href="#office"><i data-lucide="presentation"></i><span>AI办公工具</span><small>12</small></a>
          <a class="side-link" href="#coding"><i data-lucide="code-2"></i><span>AI编程工具</span><small>12</small></a>
          <a class="side-link" href="#audio"><i data-lucide="audio-lines"></i><span>AI音频工具</span><small>6</small></a>
          <a class="side-link" href="#design"><i data-lucide="palette"></i><span>AI设计工具</span><small>8</small></a>
          <a class="side-link" href="#search"><i data-lucide="search"></i><span>AI搜索引擎</span><small>8</small></a>
          <a class="side-link" href="#agent"><i data-lucide="bot"></i><span>AI智能体</span><small>6</small></a>
          <a class="side-link" href="#learning"><i data-lucide="graduation-cap"></i><span>AI学习工具</span><small>8</small></a>
          <a class="side-link" href="#translate"><i data-lucide="languages"></i><span>AI翻译工具</span><small>6</small></a>
          <a class="side-link" href="#opensource"><i data-lucide="github"></i><span>开源AI项目</span><small>18</small></a>
        </nav>
        <div class="side-divider"></div>
        <div class="side-label">发现</div>
        <nav class="side-nav"><a class="side-link" href="#ranking"><i data-lucide="chart-no-axes-column-increasing"></i><span>热门排行榜</span></a><a class="side-link" href="#new"><i data-lucide="badge-plus"></i><span>最新收录</span></a><a class="side-link" href="#guides"><i data-lucide="book-open"></i><span>AI使用指南</span></a></nav>
        <div class="sidebar-note"><strong>收录优质 AI 产品</strong><p>我们会核验官网入口、可用状态和核心能力。</p><a href="#submit">提交你的工具 →</a></div>
      </aside>

      <main class="content" id="top">
        <section class="hero">
          <div>
            <span class="hero-kicker"><i data-lucide="badge-check"></i>已精选并核验 500+ AI 工具</span>
            <h1>一个入口，找到真正好用的 AI 工具</h1>
            <p class="hero-copy">覆盖主流 AI 模型、内容创作、办公与开发工具，优先直达官方网站。</p>
            <form class="search-box" id="searchForm"><i data-lucide="search"></i><input id="searchInput" type="search" placeholder="搜索工具或需求，例如：即梦、生成视频、做PPT" autocomplete="off"><button type="submit">搜索</button></form>
            <div class="search-hints"><span>热门：</span><button type="button">DeepSeek</button><button type="button">即梦AI</button><button type="button">AI视频</button><button type="button">PPT</button><button type="button">编程</button></div>
          </div>
          <div class="hero-stats"><div class="stat-card"><strong>500+</strong><span>精选工具</span></div><div class="stat-card"><strong>15</strong><span>常用分类</span></div><div class="stat-card"><strong>10</strong><span>主流模型</span></div><div class="stat-card"><strong>每日</strong><span>持续核验</span></div></div>
        </section>

        <section class="model-section" id="models">
          <div class="section-head"><div class="section-title"><span class="section-title-icon"><i data-lucide="brain-circuit"></i></span><div><h2>常用 AI 模型入口</h2><p>对话、推理、搜索与多模态能力快速直达</p></div></div><a class="section-link" href="#">查看模型对比<i data-lucide="arrow-right"></i></a></div>
          <div class="model-grid" id="modelGrid"></div>
        </section>

        <div class="notice-bar"><i data-lucide="megaphone"></i><strong>今日推荐</strong><span>即梦AI支持文生视频与图片创作，中文提示词体验更自然。</span><a href="https://jimeng.jianying.com/" target="_blank" rel="noopener">立即体验</a></div>

        <div id="toolSections"></div>

        <section class="tool-section" id="new">
          <div class="section-head"><div class="section-title"><span class="section-title-icon"><i data-lucide="badge-plus"></i></span><div><h2>最新收录 AI 工具</h2><p>近期新增与值得关注的 AI 工具入口，优先展示可直接访问的官网</p></div></div><a class="section-link" href="#submit">推荐收录<i data-lucide="arrow-right"></i></a></div>
          <div class="new-tools-grid">
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/pixmax-cn.png" alt=""></span><div class="new-tool-info"><h3>Pixmax</h3><span>AI视频工具</span></div><span class="new-date">07-31</span></div><p>一站式AI视频内容创作平台。</p><a href="https://www.pixmax.cn/?utm_source=aitoolstop.cn" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/tingwu.svg" alt=""></span><div class="new-tool-info"><h3>通义听悟</h3><span>会议转写</span></div><span class="new-date">07-30</span></div><p>音视频转写、会议纪要、内容总结与重点提炼，适合办公协作场景。</p><a href="https://tingwu.aliyun.com/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/tencent-transmart.svg" alt=""></span><div class="new-tool-info"><h3>腾讯交互翻译</h3><span>AI翻译</span></div><span class="new-date">07-29</span></div><p>面向文本翻译和译文润色的智能翻译工具，适合内容本地化处理。</p><a href="https://transmart.qq.com/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/canva.svg" alt=""></span><div class="new-tool-info"><h3>Canva可画</h3><span>在线设计</span></div><span class="new-date">07-28</span></div><p>海报、PPT、社媒图和营销素材设计工具，适合非设计师快速出图。</p><a href="https://www.canva.cn/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/tome.svg" alt=""></span><div class="new-tool-info"><h3>Tome</h3><span>AI演示</span></div><span class="new-date">07-27</span></div><p>适合故事化表达、提案页面和演示内容生成的 AI 演示工具。</p><a href="https://tome.app/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/huoshan-writing.svg" alt=""></span><div class="new-tool-info"><h3>火山写作</h3><span>中文写作</span></div><span class="new-date">07-26</span></div><p>面向中文内容创作、改写、润色和营销文案的 AI 写作工具。</p><a href="https://www.writingo.net/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/logos/xinhua-miaobi.svg" alt=""></span><div class="new-tool-info"><h3>新华妙笔</h3><span>公文写作</span></div><span class="new-date">07-25</span></div><p>面向政企、公文和正式材料写作场景的中文 AI 写作平台。</p><a href="https://miaobi.xinhuaskl.com/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
            <article class="new-tool-card"><div class="new-tool-top"><span class="logo"><img src="https://www.google.com/s2/favicons?domain=metaso.cn&sz=128" alt=""></span><div class="new-tool-info"><h3>秘塔AI搜索</h3><span>AI搜索</span></div><span class="new-date">07-24</span></div><p>中文资料检索、问答总结与来源整理，适合快速做信息收集。</p><a href="https://metaso.cn/" target="_blank" rel="noopener">访问官网<i data-lucide="arrow-up-right"></i></a></article>
          </div>
        </section>

        <div class="bottom-grid" id="ranking">
          <section class="panel"><div class="section-head"><div class="section-title"><span class="section-title-icon"><i data-lucide="trending-up"></i></span><div><h2>本周热门工具</h2><p>基于站内访问与收藏趋势</p></div></div></div><div class="rank-list"><div class="rank-row"><span class="rank-num top">01</span><span class="rank-name">DeepSeek</span><span class="rank-trend">+18%</span></div><div class="rank-row"><span class="rank-num top">02</span><span class="rank-name">即梦AI</span><span class="rank-trend">+16%</span></div><div class="rank-row"><span class="rank-num top">03</span><span class="rank-name">可灵AI</span><span class="rank-trend">+12%</span></div><div class="rank-row"><span class="rank-num">04</span><span class="rank-name">豆包</span><span class="rank-trend">+10%</span></div><div class="rank-row"><span class="rank-num">05</span><span class="rank-name">Kimi</span><span class="rank-trend">+8%</span></div><div class="rank-row"><span class="rank-num">06</span><span class="rank-name">TRAE</span><span class="rank-trend">+7%</span></div></div></section>
        </div>


        <section class="tool-section" id="guides">
          <div class="section-head"><div class="section-title"><span class="section-title-icon"><i data-lucide="book-open"></i></span><div><h2>AI 使用指南</h2><p>把工具入口和真实使用场景连接起来，帮助用户快速选对工具</p></div></div><a class="section-link" href="#top">返回顶部<i data-lucide="arrow-up"></i></a></div>
          <div class="guide-grid">
            <article class="guide-card"><span class="guide-tag">新手入门</span><h3>新手如何选择 AI 模型</h3><p>从中文能力、联网搜索、长文处理、多模态和价格几个角度快速判断。</p><a href="#models">查看模型入口<i data-lucide="arrow-right"></i></a></article>
            <article class="guide-card"><span class="guide-tag">视频创作</span><h3>AI 视频工具怎么选</h3><p>按文生视频、图生视频、数字人、剪辑和口播场景选择更合适的工具。</p><a href="#video">查看视频工具<i data-lucide="arrow-right"></i></a></article>
            <article class="guide-card"><span class="guide-tag">图像设计</span><h3>AI 绘画提示词入门</h3><p>用主体、风格、构图、光线、比例和排除项搭建稳定的提示词结构。</p><a href="#image">查看图像工具<i data-lucide="arrow-right"></i></a></article>
            <article class="guide-card"><span class="guide-tag">办公提效</span><h3>AI 办公提效工具推荐</h3><p>PPT、会议纪要、文档总结、表格处理和资料研究可以组成一套办公流。</p><a href="#office">查看办公工具<i data-lucide="arrow-right"></i></a></article>
            <article class="guide-card"><span class="guide-tag">国内入口</span><h3>国产 AI 工具入口合集</h3><p>优先整理国内可访问、中文体验较好、适合日常工作使用的 AI 工具。</p><a href="#search">查看搜索工具<i data-lucide="arrow-right"></i></a></article>
            <article class="guide-card"><span class="guide-tag">免费工具</span><h3>免费 AI 工具使用指南</h3><p>适合先体验再决定付费，从搜索、写作、绘图、翻译和编程工具开始。</p><a href="#writing">查看写作工具<i data-lucide="arrow-right"></i></a></article>
          </div>
        </section>

        <section class="panel submit-card full" id="submit">
          <div class="submit-layout">
            <div class="submit-copy"><h2>提交你的 AI 工具</h2><p>如果你有值得推荐的 AI 产品、模型入口、开源项目或效率工具，可以先在这里记录信息。正式上线后，这里可以接入 WordPress 表单插件或投稿功能。</p><div class="submit-checks"><span><i data-lucide="check-circle-2"></i>优先收录官网入口</span><span><i data-lucide="check-circle-2"></i>核验可用状态</span><span><i data-lucide="check-circle-2"></i>补充分类与标签</span><span><i data-lucide="check-circle-2"></i>适合首页推荐</span></div></div>
            <form class="submit-form"><input type="text" placeholder="工具名称，例如：即梦AI"><input type="url" placeholder="官网链接，例如：https://example.com"><select><option>选择工具分类</option><option>AI模型</option><option>AI视频工具</option><option>AI图像工具</option><option>AI写作工具</option><option>AI办公工具</option><option>AI翻译工具</option><option>开源AI项目</option></select><textarea placeholder="推荐理由：这个工具解决什么问题，适合哪些用户？"></textarea><button class="primary-btn" type="button"><i data-lucide="send"></i>提交收录信息</button><span class="form-tip">当前为静态设计稿，按钮不会真正提交；上线 WordPress 后可接入表单插件。</span></form>
          </div>
        </section>
        <footer><span>© 2026 精选AI工具 · 所有入口优先指向官方网站</span><span>收录标准 · 免责声明 · 隐私政策 · 联系我们</span></footer>
      </main>
    </div>
  </div>
<?php
get_footer();
