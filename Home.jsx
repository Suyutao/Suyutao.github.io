import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Code, 
  Brain, 
  Target, 
  Lightbulb,
  TrendingUp,
  Star,
  GitBranch,
  Users,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { icon: TrendingUp, label: '成绩提升', value: '470→504', description: '高一期末突破' },
    { icon: Star, label: 'GitHub Stars', value: '4+', description: 'TheDreamer项目' },
    { icon: Code, label: '主要技术栈', value: 'Swift', description: 'iOS原生开发' },
    { icon: Award, label: '人格类型', value: 'INTJ-A', description: '系统设计思维' },
  ]

  const coreValues = [
    {
      icon: Brain,
      title: '系统思维',
      description: '拥有天然的系统设计者思维，倾向于构建完整系统而非零碎解决问题'
    },
    {
      icon: Target,
      title: 'Apple哲学',
      description: '深受Apple设计哲学影响，追求清晰、简洁、内容为主、人本设计'
    },
    {
      icon: Lightbulb,
      title: 'AI时代思考',
      description: '认为AI是"新相机"，人类价值在于成为"摄影师"而非"代码工人"'
    },
    {
      icon: Users,
      title: '开源精神',
      description: 'TheDreamer永不商业化，相信技术应该服务于人，而不是相反'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                <GitBranch className="w-4 h-4 mr-2" />
                正在经历认知跃迁
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  宇韬的赛博花园
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                在AI时代，成为思想者、设计者、叙事者和品味者
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                我是苏宇韬，一名2009年出生的高中生，正在经历认知跃迁的关键时期。
                我相信，当AI能写80%的代码时，我们最宝贵的价值在于设计蓝图、雕琢细节、注入灵魂。
                我不只是一个开发者，更是一个系统思考者和产品设计师。
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">INTJ-A</Badge>
                <Badge variant="secondary">2009年生</Badge>
                <Badge variant="secondary">江苏苏州</Badge>
                <Badge variant="secondary">Swift开发者</Badge>
                <Badge variant="secondary">系统思维</Badge>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  查看我的项目
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/thoughts">
                  阅读我的思考
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <Icon className="w-8 h-8 mx-auto text-blue-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">核心价值观</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                这些理念指导着我的学习、开发和思考方式
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-blue-500" />
                          </div>
                          <CardTitle className="text-xl">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                一起探索AI时代的可能性
              </h2>
              <p className="text-lg text-muted-foreground">
                从学习成长到产品开发，从技术思考到人文关怀，
                让我们一起在这个快速变化的时代中找到属于自己的位置。
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  联系我
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/Suyutao/TheDreamer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  查看TheDreamer
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

