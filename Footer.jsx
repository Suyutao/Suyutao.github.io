import { motion } from 'framer-motion'
import { Github, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              宇韬的赛博花园
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              在AI时代，成为思想者、设计者、叙事者和品味者。
              一个高中生开发者的成长记录与思考分享。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">快速链接</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                首页
              </a>
              <a href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                项目展示
              </a>
              <a href="/thoughts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                思考文章
              </a>
              <a href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                技能展示
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                联系方式
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">联系我</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://github.com/Suyutao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              期待与你的交流与合作
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} 苏宇韬. 用</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>制作</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>INTJ-A · 2009年生</span>
              <span>·</span>
              <span>江苏苏州</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

