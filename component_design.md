# 宇韬的赛博花园 - 模块化组件设计

## 1. 组件架构原则

### 1.1 可复用性原则
- **原子化设计：** 将UI拆分为最小可复用单元
- **组合式架构：** 通过组合原子组件构建复杂界面
- **配置驱动：** 通过props配置实现组件的多样化使用
- **主题一致性：** 统一的设计系统和样式规范

### 1.2 扩展性原则
- **插槽机制：** 支持内容的灵活插入和替换
- **事件系统：** 标准化的事件处理和数据流
- **状态管理：** 清晰的状态管理和数据传递
- **版本兼容：** 向后兼容的API设计

## 2. 基础组件库 (Atoms)

### 2.1 按钮组件 (Button)
```jsx
// 使用场景：导航、操作触发、链接跳转
<Button 
  variant="primary|secondary|ghost|link"
  size="sm|md|lg"
  icon={IconComponent}
  loading={boolean}
  disabled={boolean}
  onClick={handler}
>
  按钮文本
</Button>

// 变体设计：
- primary: 主要操作按钮（Apple蓝色）
- secondary: 次要操作按钮（灰色边框）
- ghost: 透明背景按钮
- link: 链接样式按钮
```

### 2.2 卡片组件 (Card)
```jsx
// 使用场景：项目展示、文章预览、信息容器
<Card 
  variant="default|elevated|outlined"
  padding="sm|md|lg"
  hoverable={boolean}
  clickable={boolean}
  className={string}
>
  <Card.Header>
    <Card.Title>标题</Card.Title>
    <Card.Subtitle>副标题</Card.Subtitle>
  </Card.Header>
  <Card.Content>
    内容区域
  </Card.Content>
  <Card.Footer>
    操作区域
  </Card.Footer>
</Card>
```

### 2.3 标签组件 (Tag)
```jsx
// 使用场景：技术栈标签、分类标签、状态标签
<Tag 
  variant="default|success|warning|error|info"
  size="sm|md|lg"
  closable={boolean}
  icon={IconComponent}
  onClose={handler}
>
  标签文本
</Tag>

// 预设样式：
- Swift: 橙色渐变
- React: 蓝色
- AI: 紫色渐变
- 开源: 绿色
```

### 2.4 进度条组件 (Progress)
```jsx
// 使用场景：技能水平展示、项目进度、加载状态
<Progress 
  value={number}
  max={number}
  variant="linear|circular|skill"
  size="sm|md|lg"
  showValue={boolean}
  animated={boolean}
  color="primary|success|warning|error"
/>
```

### 2.5 图标组件 (Icon)
```jsx
// 使用场景：装饰、功能指示、状态表示
<Icon 
  name="github|mail|external-link|code|heart"
  size={number}
  color={string}
  className={string}
/>
```

## 3. 复合组件库 (Molecules)

### 3.1 导航栏组件 (Navigation)
```jsx
<Navigation 
  variant="top|sidebar"
  theme="light|dark"
  sticky={boolean}
  transparent={boolean}
>
  <Navigation.Brand>
    <Icon name="logo" />
    宇韬的赛博花园
  </Navigation.Brand>
  <Navigation.Menu>
    <Navigation.Item href="/" active>首页</Navigation.Item>
    <Navigation.Item href="/projects">项目</Navigation.Item>
    <Navigation.Item href="/thoughts">思考</Navigation.Item>
    <Navigation.Item href="/skills">技能</Navigation.Item>
    <Navigation.Item href="/contact">联系</Navigation.Item>
  </Navigation.Menu>
  <Navigation.Actions>
    <Button variant="ghost" icon="github" />
    <Button variant="ghost" icon="theme-toggle" />
  </Navigation.Actions>
</Navigation>
```

### 3.2 项目卡片组件 (ProjectCard)
```jsx
<ProjectCard 
  project={{
    name: "TheDreamer",
    description: "由学生打造的数据驱动学习分析工具",
    image: "/images/thedreamer.png",
    tags: ["Swift", "SwiftUI", "开源"],
    stats: { stars: 4, forks: 0 },
    links: { github: "...", demo: "..." }
  }}
  variant="featured|compact|minimal"
  showStats={boolean}
  showActions={boolean}
/>
```

### 3.3 技能雷达图组件 (SkillRadar)
```jsx
<SkillRadar 
  skills={[
    { name: "Swift", level: 85, category: "编程语言" },
    { name: "React", level: 70, category: "前端框架" },
    { name: "设计思维", level: 80, category: "软技能" }
  ]}
  size={300}
  animated={boolean}
  interactive={boolean}
  showLabels={boolean}
/>
```

### 3.4 时间线组件 (Timeline)
```jsx
<Timeline 
  orientation="vertical|horizontal"
  variant="default|minimal|detailed"
>
  <Timeline.Item 
    date="2025年4月"
    title="认知跃迁"
    description="开始理解学习的真正意义"
    icon="lightbulb"
    variant="milestone"
  />
  <Timeline.Item 
    date="2025年6月"
    title="成绩突破"
    description="期末考试从470分提升到504分"
    icon="trending-up"
    variant="achievement"
  />
</Timeline>
```

### 3.5 统计卡片组件 (StatCard)
```jsx
<StatCard 
  title="GitHub Stars"
  value={4}
  change="+2"
  trend="up"
  icon="star"
  color="yellow"
  animated={boolean}
/>
```

## 4. 页面级组件 (Organisms)

### 4.1 Hero区域组件 (HeroSection)
```jsx
<HeroSection 
  variant="default|minimal|split"
  background="gradient|image|video"
  overlay={boolean}
>
  <HeroSection.Content>
    <HeroSection.Title>宇韬的赛博花园</HeroSection.Title>
    <HeroSection.Subtitle>
      在AI时代，成为思想者、设计者、叙事者和品味者
    </HeroSection.Subtitle>
    <HeroSection.Description>
      我是苏宇韬，一名正在经历认知跃迁的高中生开发者...
    </HeroSection.Description>
    <HeroSection.Actions>
      <Button variant="primary">查看项目</Button>
      <Button variant="secondary">了解更多</Button>
    </HeroSection.Actions>
  </HeroSection.Content>
  <HeroSection.Media>
    <img src="/images/avatar.jpg" alt="宇韬" />
  </HeroSection.Media>
</HeroSection>
```

### 4.2 项目展示区组件 (ProjectShowcase)
```jsx
<ProjectShowcase 
  projects={projectsData}
  layout="grid|masonry|carousel"
  columns={3}
  showFilters={boolean}
  showSearch={boolean}
  pagination={boolean}
>
  <ProjectShowcase.Header>
    <h2>我的项目</h2>
    <p>技术与创意的结合</p>
  </ProjectShowcase.Header>
  <ProjectShowcase.Filters>
    <Tag>全部</Tag>
    <Tag>Swift</Tag>
    <Tag>React</Tag>
    <Tag>开源</Tag>
  </ProjectShowcase.Filters>
  <ProjectShowcase.Grid>
    {/* 自动渲染项目卡片 */}
  </ProjectShowcase.Grid>
</ProjectShowcase>
```

### 4.3 技能展示区组件 (SkillsSection)
```jsx
<SkillsSection 
  skills={skillsData}
  layout="radar|bars|grid"
  animated={boolean}
  interactive={boolean}
>
  <SkillsSection.Header>
    <h2>技能与工具</h2>
    <p>持续学习，不断成长</p>
  </SkillsSection.Header>
  <SkillsSection.Categories>
    <SkillCategory name="编程语言" skills={programmingSkills} />
    <SkillCategory name="开发框架" skills={frameworkSkills} />
    <SkillCategory name="设计工具" skills={designSkills} />
  </SkillsSection.Categories>
  <SkillsSection.Visualization>
    <SkillRadar skills={allSkills} />
  </SkillsSection.Visualization>
</SkillsSection>
```

### 4.4 文章列表组件 (ArticleList)
```jsx
<ArticleList 
  articles={articlesData}
  layout="list|grid|magazine"
  showExcerpt={boolean}
  showTags={boolean}
  showDate={boolean}
  pagination={boolean}
>
  <ArticleList.Header>
    <h2>思考与文章</h2>
    <p>记录成长，分享思考</p>
  </ArticleList.Header>
  <ArticleList.Featured>
    <ArticleCard variant="featured" article={featuredArticle} />
  </ArticleList.Featured>
  <ArticleList.Grid>
    {/* 自动渲染文章卡片 */}
  </ArticleList.Grid>
</ArticleList>
```

### 4.5 联系表单组件 (ContactForm)
```jsx
<ContactForm 
  variant="simple|detailed"
  showSocialLinks={boolean}
  showAvailability={boolean}
  onSubmit={handleSubmit}
>
  <ContactForm.Header>
    <h2>联系我</h2>
    <p>期待与你的交流</p>
  </ContactForm.Header>
  <ContactForm.Fields>
    <Input name="name" label="姓名" required />
    <Input name="email" label="邮箱" type="email" required />
    <Select name="subject" label="主题" options={subjectOptions} />
    <Textarea name="message" label="消息" required />
  </ContactForm.Fields>
  <ContactForm.Actions>
    <Button type="submit" variant="primary">发送消息</Button>
  </ContactForm.Actions>
  <ContactForm.SocialLinks>
    <SocialLink platform="github" url="..." />
    <SocialLink platform="email" url="..." />
  </ContactForm.SocialLinks>
</ContactForm>
```

## 5. 布局组件 (Templates)

### 5.1 页面布局组件 (PageLayout)
```jsx
<PageLayout 
  variant="default|fullwidth|sidebar"
  showNavigation={boolean}
  showFooter={boolean}
  sidebarContent={ReactNode}
>
  <PageLayout.Header>
    <Navigation />
  </PageLayout.Header>
  <PageLayout.Main>
    <PageLayout.Content>
      {children}
    </PageLayout.Content>
    <PageLayout.Sidebar>
      {sidebarContent}
    </PageLayout.Sidebar>
  </PageLayout.Main>
  <PageLayout.Footer>
    <Footer />
  </PageLayout.Footer>
</PageLayout>
```

### 5.2 容器组件 (Container)
```jsx
<Container 
  size="sm|md|lg|xl|full"
  padding="sm|md|lg"
  centered={boolean}
  className={string}
>
  {children}
</Container>
```

### 5.3 网格组件 (Grid)
```jsx
<Grid 
  columns={number}
  gap="sm|md|lg"
  responsive={boolean}
  className={string}
>
  <Grid.Item span={number} offset={number}>
    内容
  </Grid.Item>
</Grid>
```

## 6. 主题系统

### 6.1 设计令牌 (Design Tokens)
```javascript
const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',  // Apple蓝
      900: '#1e3a8a'
    },
    gray: {
      50: '#f9fafb',
      500: '#6b7280',
      900: '#111827'
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  typography: {
    fontFamily: {
      sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      mono: ['SF Mono', 'Menlo', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    8: '2rem',
    16: '4rem'
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  }
}
```

### 6.2 响应式断点
```javascript
const breakpoints = {
  sm: '640px',   // 手机
  md: '768px',   // 平板
  lg: '1024px',  // 笔记本
  xl: '1280px',  // 桌面
  '2xl': '1536px' // 大屏
}
```

## 7. 动画系统

### 7.1 过渡动画
```javascript
const transitions = {
  default: 'all 0.2s ease-in-out',
  fast: 'all 0.1s ease-in-out',
  slow: 'all 0.3s ease-in-out',
  bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
}
```

### 7.2 关键帧动画
```javascript
const animations = {
  fadeIn: 'fadeIn 0.5s ease-in-out',
  slideUp: 'slideUp 0.3s ease-out',
  scaleIn: 'scaleIn 0.2s ease-out',
  pulse: 'pulse 2s infinite',
  typing: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
}
```

## 8. 状态管理

### 8.1 全局状态
```javascript
const globalState = {
  theme: 'dark|light|auto',
  language: 'zh|en',
  user: {
    preferences: {},
    settings: {}
  },
  ui: {
    sidebarOpen: boolean,
    modalOpen: boolean,
    loading: boolean
  }
}
```

### 8.2 组件状态
```javascript
// 每个组件维护自己的内部状态
// 通过props接收外部配置
// 通过callbacks向上传递事件
```

这个模块化组件设计确保了网站的可维护性、可扩展性和一致性，为未来的功能扩展和设计迭代提供了坚实的基础。

