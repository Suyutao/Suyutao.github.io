import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Users, 
  Shield, 
  Smartphone,
  BarChart3,
  Brain,
  Zap,
  Heart,
  Lock,
  Lightbulb,
  Target
} from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'thedreamer',
      title: 'TheDreamer',
      subtitle: '由学生打造，为学生而生',
      description: '一款数据驱动的学习分析工具，开源、免费、隐私优先。帮助学生通过可视化和分析掌控学习旅程。',
      longDescription: `TheDreamer 是我对现有学习工具的不满而创造的产品。我厌倦了那些充斥着广告、诱导付费、设计臃肿的学习工具。我坚信，一个好的学习助手，应该是纯粹的、高效的、值得信赖的。`,
      features: [
        { icon: BarChart3, text: '综合分析：追踪考试分数、练习会话、学习进度' },
        { icon: Smartphone, text: 'SwiftUI + SwiftData 原生iOS体验' },
        { icon: Lock, text: '隐私优先：所有数据本地存储' },
        { icon: Target, text: '科目管理和模板系统' }
      ],
      tech: ['Swift', 'SwiftUI', 'SwiftData', 'Swift Charts'],
      status: '开发中',
      stats: { stars: 4, forks: 0, contributors: 1 },
      links: {
        github: 'https://github.com/Suyutao/TheDreamer',
        demo: null
      },
      philosophy: '永不商业化，永远免费。技术应该服务于人，而不是相反。',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'overflow',
      title: 'Overflow',
      subtitle: 'AI驱动的认知系统',
      description: '面向ADHD与高脑流人群的思维整理工具，帮助从混乱中抓住线索，把想法变成系统，把系统变成行动。',
      longDescription: `Overflow 不是一个笔记工具，而是一个能理解你脑流节奏的"思维整理拍档"。它的核心价值在于自动化潜力以及记录之后的一切处理，而非记录本身。`,
      features: [
        { icon: Brain, text: '多模态灵感捕捉：文本、语音、图像OCR' },
        { icon: Zap, text: 'AI智能分类整理和摘要' },
        { icon: Target, text: 'DayMap时间网格调度系统' },
        { icon: Users, text: '自定义Subject主题体系' }
      ],
      tech: ['Swift', 'AI/ML', 'Core Data', 'Natural Language'],
      status: '规划中',
      stats: { stars: 0, forks: 0, contributors: 1 },
      links: {
        github: null,
        demo: null
      },
      philosophy: '构建无敌的自动化管理系统，降低认知负担。',
      image: '/api/placeholder/600/400'
    }
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
                我的项目
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                技术与创意的结合，每个项目都承载着我对产品设计和用户体验的思考
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>4+ GitHub Stars</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Apache 2.0 开源</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-red-500" />
                <span>用心打磨</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-muted-foreground">
                        {project.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        项目预览图
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant={project.status === '开发中' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    {project.stats.stars > 0 && (
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <p className="text-lg text-blue-500 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
                    {project.longDescription}
                  </blockquote>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-semibold">核心功能</h3>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => {
                      const Icon = feature.icon
                      return (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="font-semibold">技术栈</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm">设计理念</h4>
                      <p className="text-sm text-muted-foreground mt-1">{project.philosophy}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <Button asChild>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        查看源码
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" asChild>
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        在线演示
                      </a>
                    </Button>
                  )}
                  {!project.links.github && !project.links.demo && (
                    <Button variant="outline" disabled>
                      即将发布
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Philosophy */}
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
              <h2 className="text-3xl font-bold">开发理念</h2>
              <p className="text-lg text-muted-foreground mt-4">
                我的项目开发哲学与方法论
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <span>AI时代的开发者</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    我主要使用AI辅助开发，这体现了我对"AI时代开发者"角色的理解。
                    我专注于产品设计、用户体验和功能规划，让AI处理具体的代码实现。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    从"持续瞄准，从不开枪"到"先开枪，后瞄准"——我正在学习平衡完美主义与快速迭代，
                    相信完成比完美更重要，先做出60分的产品，再慢慢打磨到120分。
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-blue-500">
                    <Zap className="w-4 h-4" />
                    <span>撬动"故事杠杆"和"人际杠杆"，而非仅仅追求"产品质量杠杆"</span>
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

export default Projects

