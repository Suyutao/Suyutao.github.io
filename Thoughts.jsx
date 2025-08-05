import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  ArrowRight, 
  Brain, 
  Lightbulb, 
  TrendingUp,
  Camera,
  Palette,
  Target,
  BookOpen,
  Zap
} from 'lucide-react'

const Thoughts = () => {
  const articles = [
    {
      id: 'ai-era-thinking',
      title: '当AI能写80%的代码，我们还剩下什么？',
      subtitle: 'AI给了每个人"相机"，但如何成为"摄影师"？',
      excerpt: '每一个软件用户，都曾对他们使用的产品有过或多或少的"想法"。这些想法，源于真实存在的痛点...',
      content: `每一个软件用户，都曾对他们使用的产品有过或多或少的"想法"。这些想法，源于真实存在的痛点：可能是现有产品理念与自己格格不入，可能是某个关键功能的缺失，甚至可能是在某个微小细节上的强烈不满。然而，在过去，将这些想法变为现实，横亘着一道由"编程技能、时间成本、资金投入"组成的巨大鸿沟。无数闪光的创意，都因无法跨越这道鸿沟而最终消亡。

现在，AI正在成为那座跨越鸿沟的桥梁。它将创造的权力，从少数掌握复杂技术的人手中解放出来，交还给了每一个拥有独特想法的普通人。"掌握代码"不再是创造的必要条件，"想法"本身，成为了可以直接驱动创造的引擎。

这引出了一个核心问题：在开发门槛被AI极大降低的今天，什么才是最稀缺、最重要的能力？

AI是一个无与伦比的"执行者"。你给它指令，它能以惊人的速度砌砖抹墙，将过去数周的工作压缩到一两天。但它没有灵魂，缺乏品味，更不具备同理心。AI可以高效地建造一座房子，却永远无法理解，什么样的设计才能让居住者感到真正的温暖与舒适。

这些，恰恰是AI无法替代的、属于"人"的最高价值。当繁琐的"实现"过程被AI接管，我们终于可以将全部精力专注于那些真正重要的事：设计蓝图、雕琢细节、注入灵魂。

这正如摄影技术的发明。它让普通人也能捕捉光影，不再需要穷尽一生去掌握高超的绘画技巧。但这并不意味着画家的消亡，更不意味着人人都能成为摄影师。AI，就是我们这个时代的"新相机"，它将"编程"这门曾经高深的技艺，变成了一种更普适、更易得的创作媒介。

那么，谁能成为新时代的"摄影师"？

答案已经不言而喻。那些仅仅是将需求文档翻译成代码、不带任何思考的"代码工人"，他们的工作路径与AI高度重合，被替代只是时间问题。

而另一类人，他们的价值不仅不会被削弱，反而会被AI无限放大。他们是那些能够理解用户、洞察需求、追求优雅体验、拥有产品思维和架构远见的创造者。他们将摆脱繁琐的实现细节，将全部才华投入到更高级、更具创造性的工作中——他们才是新时代的"摄影师"。

所以，最重要的不再是终其一生所研究的绘画技巧，而是成为那个心中有视角、脑中有构图、眼中有光影、手中有分寸的人。他们是思想者、设计者、叙事者和品味者。这，才是AI浪潮下，人最稀缺、也最宝贵的价值所在。`,
      tags: ['AI', '技术思考', '产品设计', '未来'],
      readTime: '8分钟',
      publishDate: '2025年8月',
      category: 'tech',
      icon: Camera
    },
    {
      id: 'cognitive-leap',
      title: '从470到504：一个高中生的认知跃迁之路',
      subtitle: '如何在三个月内实现学习态度和成绩的双重突破',
      excerpt: '2025年4月，我经历了显著的认知跃迁。我开始理解：学习不是为了应付考试，而是为了获得未来的自由...',
      content: `2025年4月，我经历了显著的认知跃迁。我开始理解：学习不是为了应付考试，而是为了获得未来的自由。这种自由是为了实现我真正热爱的创造、开发和表达。

从不喜欢学习，到为了梦想逼着自己学习，到慢慢喜欢上学习，我的成绩在高一下学期有了显著提升，期末总分从470左右跃升至504，数学更是首次突破89分。

这个转变的关键在于我重新定义了学习的意义：
- 学习是为了好大学
- 好大学是为了未来的自由  
- 未来的自由是为了追求真正热爱的创造、开发和表达

当我明确了这个逻辑链条，学习就不再是痛苦的任务，而是通向梦想的必经之路。每一道题目、每一个知识点，都成为了构建未来的砖石。

实践方法包括：
1. 科目时间段安排，提高专注度
2. 定制化工作空间，营造学习氛围
3. AI辅助学习，提高效率
4. 微型胜利积累，建立正向反馈
5. 过程记录反思，持续优化方法

这次认知跃迁让我明白：真正的成长不是被动地接受知识，而是主动地为了明确的目标而学习。当你知道自己为什么要学习时，如何学习就变得清晰了。`,
      tags: ['学习方法', '认知跃迁', '成长', '高中生活'],
      readTime: '6分钟',
      publishDate: '2025年7月',
      category: 'growth',
      icon: TrendingUp
    },
    {
      id: 'apple-philosophy',
      title: 'Apple教会我的产品设计哲学',
      subtitle: '从用户体验到人文关怀的思考',
      excerpt: '好的产品应该像一支好用的笔，或一个干净的笔记本，安静地待在那里，随时准备好为我们服务...',
      content: `深受Apple设计哲学影响，我逐渐形成了自己的产品设计理念。Apple教会我的不仅仅是如何做出好看的界面，更重要的是如何思考产品与人的关系。

核心理念：
1. **清晰、简洁、内容为主** - 去除一切不必要的元素，让用户专注于真正重要的内容
2. **人本设计和平台原生感** - 产品应该符合用户的直觉和习惯
3. **功能与美学的完美平衡** - 美不是装饰，而是功能的自然体现
4. **对细节的极致追求** - 细节决定了产品的品质和用户的感受
5. **技术服务于人的理念** - 技术应该让生活更美好，而不是更复杂

好的产品应该像一支好用的笔，或一个干净的笔记本，安静地待在那里，随时准备好为我们服务，而不是反过来消耗我们的精力。

在TheDreamer的开发中，我坚持这些原则：
- 无广告、无内购的纯粹体验
- 本地数据存储保护隐私
- 直观的界面设计
- 专注于核心功能
- 持续的用户体验优化

这种设计哲学不仅适用于产品开发，也指导着我的学习和生活方式：追求本质，拒绝浮华，用心打磨每一个细节。`,
      tags: ['产品设计', 'Apple', '用户体验', '设计哲学'],
      readTime: '5分钟',
      publishDate: '2025年6月',
      category: 'design',
      icon: Palette
    }
  ]

  const categories = [
    { id: 'all', label: '全部', icon: BookOpen },
    { id: 'tech', label: '技术思考', icon: Brain },
    { id: 'growth', label: '成长感悟', icon: TrendingUp },
    { id: 'design', label: '设计理念', icon: Palette }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl font-bold">
                思考与文章
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                记录成长，分享思考。从技术洞察到人生感悟，每一篇文章都是我认知跃迁的见证
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={category.id === 'all' ? 'default' : 'outline'}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </Button>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">精选文章</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {articles[0].title}
                    </h2>
                    <p className="text-lg text-blue-500 font-medium">
                      {articles[0].subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {articles[0].excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {articles[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="group">
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <Camera className="w-16 h-16 mx-auto text-blue-500" />
                    <div className="text-lg font-semibold">AI时代思考</div>
                    <div className="text-sm text-muted-foreground">
                      成为"摄影师"而非"代码工人"
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {articles.slice(1).map((article, index) => {
              const Icon = article.icon
              return (
                <motion.div key={article.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-blue-500" />
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <Badge variant="outline">{article.publishDate}</Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" className="w-full group">
                        阅读全文
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Writing Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold">写作理念</h2>
              <p className="text-lg text-muted-foreground mt-4">
                用文字记录思考，用思考指导行动
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <span>认知跃迁的记录者</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    我的文章不是为了展示知识，而是为了记录思考的过程。每一篇文章都是我在某个特定时刻的认知状态的快照，
                    记录着我如何从一个问题出发，经过思考、实践、反思，最终形成新的理解。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    我相信真正有价值的不是结论，而是得出结论的过程。通过分享这个过程，
                    我希望能够帮助其他人找到属于自己的思考路径，实现属于自己的认知跃迁。
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-blue-500">
                    <Zap className="w-4 h-4" />
                    <span>思考 → 实践 → 反思 → 分享 → 成长</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Thoughts

