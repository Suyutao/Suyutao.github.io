import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Code, 
  Palette, 
  Brain, 
  Smartphone,
  Monitor,
  Database,
  Zap,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Star
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: '编程语言',
      icon: Code,
      skills: [
        { name: 'Swift', level: 85, description: 'iOS原生开发，SwiftUI专家', color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 75, description: '前端开发，React生态', color: 'from-yellow-500 to-orange-500' },
        { name: 'Python', level: 60, description: '数据分析，AI辅助开发', color: 'from-blue-500 to-green-500' },
        { name: 'HTML/CSS', level: 80, description: '现代Web标准，响应式设计', color: 'from-pink-500 to-purple-500' }
      ]
    },
    {
      title: '开发框架',
      icon: Monitor,
      skills: [
        { name: 'SwiftUI', level: 85, description: '声明式UI，iOS原生体验', color: 'from-blue-500 to-purple-500' },
        { name: 'React', level: 70, description: '组件化开发，现代前端', color: 'from-cyan-500 to-blue-500' },
        { name: 'Node.js', level: 55, description: '后端开发，API设计', color: 'from-green-500 to-teal-500' },
        { name: 'Tailwind CSS', level: 80, description: '原子化CSS，快速开发', color: 'from-teal-500 to-cyan-500' }
      ]
    },
    {
      title: '设计工具',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 75, description: 'UI/UX设计，原型制作', color: 'from-purple-500 to-pink-500' },
        { name: 'Sketch', level: 60, description: 'macOS设计工具', color: 'from-yellow-500 to-orange-500' },
        { name: 'Adobe XD', level: 65, description: '交互设计，用户体验', color: 'from-pink-500 to-red-500' }
      ]
    },
    {
      title: '数据技术',
      icon: Database,
      skills: [
        { name: 'SwiftData', level: 80, description: 'iOS数据持久化', color: 'from-blue-500 to-indigo-500' },
        { name: 'Core Data', level: 65, description: 'iOS数据管理', color: 'from-indigo-500 to-purple-500' },
        { name: 'SQLite', level: 60, description: '轻量级数据库', color: 'from-gray-500 to-gray-600' }
      ]
    }
  ]

  const softSkills = [
    {
      title: '系统思维',
      level: 90,
      icon: Brain,
      description: 'INTJ-A人格带来的天然系统设计思维，善于构建完整解决方案'
    },
    {
      title: '产品设计',
      level: 80,
      icon: Target,
      description: '深受Apple设计哲学影响，追求用户体验和产品完整性'
    },
    {
      title: '用户体验',
      level: 75,
      icon: Users,
      description: '关注用户需求，将个人痛点转化为产品功能'
    },
    {
      title: '学习能力',
      level: 85,
      icon: TrendingUp,
      description: '认知跃迁能力强，善于从失败中学习和成长'
    },
    {
      title: 'AI协作',
      level: 80,
      icon: Zap,
      description: '熟练使用AI辅助开发，专注于产品设计和架构规划'
    },
    {
      title: '创新思维',
      level: 85,
      icon: Lightbulb,
      description: '将自身需求产品化，具备从0到1的创造能力'
    }
  ]

  const achievements = [
    {
      title: 'TheDreamer开源项目',
      description: '4+ GitHub Stars，完整的iOS学习分析工具',
      icon: Star,
      date: '2025年'
    },
    {
      title: '认知跃迁突破',
      description: '高一期末成绩从470分提升到504分',
      icon: TrendingUp,
      date: '2025年6月'
    },
    {
      title: 'Swift自学成功',
      description: '暑假期间掌握SwiftUI和iOS开发',
      icon: Smartphone,
      date: '2025年暑假'
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
                技能与工具
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                持续学习，不断成长。从编程技能到设计思维，每一项能力都是通向梦想的阶梯
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Code className="w-4 h-4" />
                <span>4种编程语言</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>iOS原生开发</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Brain className="w-4 h-4" />
                <span>系统设计思维</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">技术技能</h2>
              <p className="text-lg text-muted-foreground">
                专注于iOS开发和现代Web技术
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                return (
                  <motion.div key={categoryIndex} variants={itemVariants}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-blue-500" />
                          </div>
                          <span>{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{skill.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {skill.description}
                                </div>
                              </div>
                              <Badge variant="outline">{skill.level}%</Badge>
                            </div>
                            <div className="relative">
                              <Progress value={skill.level} className="h-2" />
                              <div 
                                className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-80`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">软技能</h2>
              <p className="text-lg text-muted-foreground">
                INTJ-A人格特质带来的独特优势
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className="mx-auto p-3 bg-blue-500/10 rounded-full w-fit">
                          <Icon className="w-8 h-8 text-blue-500" />
                        </div>
                        <CardTitle className="text-lg">{skill.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-4">
                        <div className="relative w-24 h-24 mx-auto">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              className="text-muted-foreground/20"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 40}`}
                              strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                              className="text-blue-500 transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold">{skill.level}%</span>
                          </div>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {skill.description}
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

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">成就与里程碑</h2>
              <p className="text-lg text-muted-foreground">
                记录成长路上的重要时刻
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="mx-auto p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge variant="outline">{achievement.date}</Badge>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {achievement.description}
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

      {/* Learning Philosophy */}
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
              <h2 className="text-3xl font-bold">学习理念</h2>
              <p className="text-lg text-muted-foreground mt-4">
                持续学习，拥抱变化
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <span>AI时代的学习者</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    在AI时代，我相信学习的重点不再是记忆大量的语法和API，而是培养系统思维、产品感觉和解决问题的能力。
                    我善于利用AI作为学习和开发的助手，专注于更高层次的设计和架构思考。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    我的学习方法是"需求驱动"——通过实际项目来学习技术，通过解决真实问题来提升能力。
                    每一个技能的掌握都是为了更好地实现产品想法，每一次学习都是为了更接近创业梦想。
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span>目标导向学习</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Zap className="w-4 h-4 text-blue-500" />
                      <span>AI辅助开发</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Brain className="w-4 h-4 text-blue-500" />
                      <span>系统性思考</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>用户体验优先</span>
                    </div>
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

export default Skills

