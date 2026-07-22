// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         <h1 className="text-xl font-bold">ToolVerse AI</h1>

//         <nav className="hidden items-center gap-6 md:flex">
//           <a href="#">Image</a>
//           <a href="#">PDF</a>
//           <a href="#">AI</a>
//           <a href="#">Automation</a>
//           <a href="#">Pricing</a>
//         </nav>

//         <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
//           Get Started
//         </button>
//       </div>
//     </header>
//   );
// }

// import { Logo } from "./logo";
// import { NavMenu } from "./nav-menu";
// import { NavActions } from "./nav-actions";

// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
//         <Logo />

//         <NavMenu />

//         <NavActions />
//       </div>
//     </header>
//   );
// }

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavActions } from "./nav-actions";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <NavMenu />

        <div className="flex items-center gap-2">
          <NavActions />

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}