import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, Award, GraduationCap, Code, Users } from "lucide-react";
const professionalImage = "/lovable-uploads/944c8792-0cef-422b-b232-6f32e4287b77.png";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-portfolio-blue-subtle py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <img
                src={professionalImage}
                alt="Srinidhi - Professional Photo"
                className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover ring-4 ring-portfolio-blue/20 hover:ring-portfolio-blue/40 transition-all duration-300"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Srinidhi
            </h1>
            <p className="text-xl text-portfolio-gray mb-6 max-w-2xl mx-auto">
              Professional • Dedicated • Results-Driven
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-portfolio-blue hover:bg-portfolio-blue-light">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue-subtle">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <Card className="border-portfolio-blue-subtle">
            <CardContent className="p-8">
              <p className="text-lg text-portfolio-gray leading-relaxed text-center">
                A dedicated professional with a passion for excellence and innovation. I bring a unique blend of 
                technical expertise, creative problem-solving, and strong communication skills to every project. 
                My goal is to deliver exceptional results while fostering collaborative relationships and 
                continuous learning. I thrive in dynamic environments where I can contribute to meaningful 
                projects and make a positive impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-portfolio-gray-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-blue">
                  <Code className="w-5 h-5 mr-2" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-blue">
                  <Users className="w-5 h-5 mr-2" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Leadership</Badge>
                  <Badge variant="secondary">Communication</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Adaptability</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-portfolio-blue">Project Alpha</CardTitle>
                <CardDescription>Full-stack web application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">
                  Developed a comprehensive web application using React and Node.js, 
                  improving user engagement by 40% and reducing load times by 25%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                </div>
                <Button variant="outline" size="sm" className="text-portfolio-blue border-portfolio-blue">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-portfolio-blue">Data Analytics Dashboard</CardTitle>
                <CardDescription>Business intelligence solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">
                  Created an interactive dashboard for data visualization and reporting, 
                  enabling stakeholders to make data-driven decisions efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>D3.js</Badge>
                  <Badge>PostgreSQL</Badge>
                </div>
                <Button variant="outline" size="sm" className="text-portfolio-blue border-portfolio-blue">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-portfolio-blue">Mobile App Solution</CardTitle>
                <CardDescription>Cross-platform mobile application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">
                  Built a responsive mobile application that increased customer satisfaction 
                  scores by 35% and achieved 50K+ downloads within the first quarter.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>React Native</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>Redux</Badge>
                </div>
                <Button variant="outline" size="sm" className="text-portfolio-blue border-portfolio-blue">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-portfolio-blue">API Integration Platform</CardTitle>
                <CardDescription>Backend microservices architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">
                  Designed and implemented a scalable API platform that handles 1M+ requests 
                  daily with 99.9% uptime and improved system performance by 60%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Express.js</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                </div>
                <Button variant="outline" size="sm" className="text-portfolio-blue border-portfolio-blue">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements & Education */}
      <section className="py-16 px-4 bg-portfolio-gray-light">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center">
                <Award className="w-8 h-8 mr-3 text-portfolio-blue" />
                Achievements
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">Excellence Award 2023</h3>
                    <p className="text-portfolio-gray">Recognized for outstanding performance and leadership in project delivery</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">Innovation Challenge Winner</h3>
                    <p className="text-portfolio-gray">First place in company-wide innovation competition</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">Team Leadership Recognition</h3>
                    <p className="text-portfolio-gray">Led cross-functional team of 8 members to successful project completion</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-portfolio-blue" />
                Education & Certificates
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">Bachelor's Degree</h3>
                    <p className="text-portfolio-gray mb-1">Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">University Name • 2020-2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">AWS Certified Solutions Architect</h3>
                    <p className="text-portfolio-gray mb-1">Amazon Web Services</p>
                    <p className="text-sm text-muted-foreground">2023</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-portfolio-blue mb-2">Full Stack Web Development</h3>
                    <p className="text-portfolio-gray mb-1">Certified Online Course</p>
                    <p className="text-sm text-muted-foreground">2023</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Let's Connect</h2>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or just connect professionally.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-portfolio-blue hover:bg-portfolio-blue-light">
              <Mail className="w-5 h-5 mr-2" />
              srinidhi@email.com
            </Button>
            <Button variant="outline" size="lg" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue-subtle">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue-subtle">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-blue text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p>&copy; 2024 Srinidhi. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-80">Built with passion and attention to detail</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;