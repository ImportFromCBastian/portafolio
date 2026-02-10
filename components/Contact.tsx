import { Github, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="grid gap-6">
              <div className="flex items-center space-x-4 mt-4">
                <MailIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Email
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    sebshndz2001@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Phone
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +54 221 683-4808
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LinkedinIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/sebastian-hernandez-fs"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener"
                  >
                    linkedin.com/sebastian-hernandez
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/ImportFromCBastian"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener"
                  >
                    github.com/ImportFromCBastian
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
