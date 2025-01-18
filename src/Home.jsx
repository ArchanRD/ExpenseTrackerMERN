import { Link } from "react-router-dom";
import {
  BarChart3,
  CheckCircle2,
  CreditCard,
  DollarSign,
  LineChart,
  PieChart,
  Plus,
  Shield,
  Smartphone,
  Wallet,
} from "lucide-react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Smart Expense Tracking for Modern Life
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Take control of your finances with our intuitive expense
                    tracking solution. Monitor, analyze, and optimize your
                    spending habits.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    href="#"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-20 blur-3xl" />
                  <div className="relative w-full h-full bg-white rounded-lg shadow-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Monthly Overview</h3>
                        <Plus className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="h-[300px] w-full bg-gray-100  rounded-md" />
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-100  rounded-md">
                          <DollarSign className="h-5 w-5 text-green-500 mb-2" />
                          <div className="text-sm font-medium">Income</div>
                          <div className="text-lg font-bold">$4,250</div>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-md">
                          <CreditCard className="h-5 w-5 text-red-500 mb-2" />
                          <div className="text-sm font-medium">Expenses</div>
                          <div className="text-lg font-bold">$2,800</div>
                        </div>
                        <div className="p-4 bg-gray-100  rounded-md">
                          <Wallet className="h-5 w-5 text-blue-500 mb-2" />
                          <div className="text-sm font-medium">Balance</div>
                          <div className="text-lg font-bold">$1,450</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Track Every Penny
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Our comprehensive suite of features helps you maintain
                  complete control over your finances
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <BarChart3 className="h-6 w-6" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Expense Analytics</h3>
                    <p className="text-sm text-gray-500 ">
                      Visualize your spending patterns with detailed charts and
                      graphs
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Smartphone className="h-6 w-6" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Mobile App</h3>
                    <p className="text-sm text-gray-500 ">
                      Track expenses on the go with our intuitive mobile
                      application
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Shield className="h-6 w-6" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Secure Data</h3>
                    <p className="text-sm text-gray-500 ">
                      Bank-level encryption keeps your financial data safe and
                      private
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:col-span-2">
                <div className="relative w-full max-w-[600px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-20 blur-3xl" />
                  <div className="relative bg-white  rounded-lg shadow-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Spending Categories</h3>
                        <LineChart className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <PieChart className="h-40 w-40 mx-auto" />
                          <div className="text-center text-sm font-medium">
                            Monthly Distribution
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500" />
                              <span className="text-sm">Housing</span>
                            </div>
                            <span className="text-sm font-medium">35%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-green-500" />
                              <span className="text-sm">Food</span>
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-yellow-500" />
                              <span className="text-sm">Transport</span>
                            </div>
                            <span className="text-sm font-medium">20%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500" />
                              <span className="text-sm">Entertainment</span>
                            </div>
                            <span className="text-sm font-medium">20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                  Why Choose Us
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Smart features that work for you
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div className="grid gap-4 text-center sm:grid-cols-2">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-bold">Automatic Categorization</h3>
                  <p className="text-sm text-gray-500 ">
                    Smart AI categorizes your expenses automatically
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-bold">Budget Alerts</h3>
                  <p className="text-sm text-gray-500 ">
                    Get notified when you're approaching budget limits
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-bold">Bill Reminders</h3>
                  <p className="text-sm text-gray-500 ">
                    Never miss a payment with smart reminders
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-bold">Custom Reports</h3>
                  <p className="text-sm text-gray-500 ">
                    Generate detailed reports for better insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container grid mx-auto items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Start Managing Your Expenses Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who trust ExpenseTrack for their
                personal finance management
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Sign Up
                </button>
              </form>
              <p className="text-xs text-gray-500 ">
                Free plan includes all basic features. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">
          © 2024 ExpenseTrack. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
