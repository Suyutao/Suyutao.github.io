import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Github, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Calendar,
  Code,
  BookOpen,
  Users,
  Rocket,
  Heart,
  Coffee,
  Lightbulb,
  Target
} from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Github,
      title: 'GitHub',
      description: '查看我的开源项目和代码',
      value: '@Suyutao',
      link: 'https://github.com/Suyutao',
      primary: true
    },
    {
      icon: Mail,
      title: '邮箱',
      description: '商务合作或深度交流',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
      primary: true
    },
    {
      icon: MessageCircle,
      title: '即时消息',
      description: '快速沟通和技术讨论',
      value: '微信/QQ',
      link: null,
      primary: false
    }
  ]

  const collaborationTypes = [
    {
      icon: Code,
      title: '开源项目合作',
      description: '一起为TheDreamer或其他开源项目贡献代码',
      tags: ['Swift', 'iOS', '开源']
    },
    {
      icon: Lightbulb,
      title: '技术交流讨论',
      description: '分享学习心得，讨论技术趋势和产品设计',
      tags: ['AI', '产品设计', 'Apple']
    },
    {
      icon: BookOpen,
      title: '学习经验分享',
      description: '交流学习方法，分享认知跃迁的经验',
      tags: ['学习方法', '认知科学', '成长']
    },
    {
      icon: Rocket,
      title: '创业项目探讨',
      description: '讨论Overflow等项目的发展方向和商业模式',
      tags: ['创业', 'ADHD', 'AI产品']
    }
  ]

  const currentStatus = {
    availability: '部分时间可用',
    focus: '专注于学业（高考目标600分）',
    projects: ['TheDreamer开发', 'Overflow规划', '高二学习准备'],
    responseTime: '通常24小时内回复',
    timezone: 'UTC+8 (中国标准时间)'
  }

  const personalInfo = {
    location: '江苏苏州',
    age: '16岁（2009年生）',
    personality: 'INTJ-A',
    interests: ['iOS开发', 'AI技术', '产品设计', '认知科学'],
    currentReading: ['《纳瓦尔宝典》', '《原则》']
  }

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
                联系我
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                期待与你的交流与合作。无论是技术讨论、学习分享，还是项目合作，我都很乐意与志同道合的朋友连接
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>24小时内回复</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>江苏苏州</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>INTJ-A</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">联系方式</h2>
              <p className="text-lg text-muted-foreground">
                选择最适合的方式与我取得联系
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className={`h-full hover:shadow-lg transition-shadow ${
                      method.primary ? 'ring-2 ring-blue-500/20' : ''
                    }`}>
                      <CardHeader className="text-center">
                        <div className={`mx-auto p-3 rounded-full w-fit ${
                          method.primary 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-muted'
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            method.primary ? 'text-white' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        {method.primary && (
                          <Badge variant="default" className="w-fit mx-auto">
                            推荐
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent className="text-center space-y-4">
                        <CardDescription className="text-sm leading-relaxed">
                          {method.description}
                        </CardDescription>
                        <div className="font-mono text-sm bg-muted p-2 rounded">
                          {method.value}
                        </div>
                        {method.link ? (
                          <Button asChild className="w-full">
                            <a 
                              href={method.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              立即联系
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full" disabled>
                            私下分享
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">合作意向</h2>
              <p className="text-lg text-muted-foreground">
                我感兴趣的合作类型和交流方向
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collaborationTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-blue-500" />
                          </div>
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-sm leading-relaxed">
                          {type.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {type.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Status & Availability */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Current Status */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>当前状态</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">可用性</span>
                      <Badge variant="outline">{currentStatus.availability}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">主要专注</span>
                      <span className="text-sm">{currentStatus.focus}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">回复时间</span>
                      <span className="text-sm">{currentStatus.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">时区</span>
                      <span className="text-sm">{currentStatus.timezone}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">当前项目</h4>
                    <div className="space-y-1">
                      {currentStatus.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Target className="w-3 h-3 text-blue-500" />
                          <span className="text-sm text-muted-foreground">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>个人信息</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">所在地</span>
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">年龄</span>
                      <span className="text-sm">{personalInfo.age}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">人格类型</span>
                      <Badge variant="outline">{personalInfo.personality}</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">兴趣领域</h4>
                    <div className="flex flex-wrap gap-1">
                      {personalInfo.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">正在阅读</h4>
                    <div className="space-y-1">
                      {personalInfo.currentReading.map((book, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <BookOpen className="w-3 h-3 text-green-500" />
                          <span className="text-sm text-muted-foreground">{book}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Coffee className="w-5 h-5 text-blue-500" />
                    <span>让我们开始对话</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    无论你是想讨论技术问题、分享学习心得，还是探讨产品设计理念，
                    我都很期待与你的交流。让我们一起在AI时代找到属于自己的位置，
                    成为真正的"摄影师"而非"代码工人"。
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a 
                        href="https://github.com/Suyutao" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        访问我的GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="mailto:contact@example.com">
                        <Mail className="w-4 h-4 mr-2" />
                        发送邮件
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    "至今没有遇到知音，我认为知音的定义是思维方式高度相同的人。" 
                    <br />
                    也许你就是我在寻找的那个人？
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

