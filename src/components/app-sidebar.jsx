import { NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  { to: "/",          icon: "lni-home-2",        label: "Anuncios"  },
  { to: "/perfil",    icon: "lni-user-4",         label: "Perfil"    },
  { to: "/ausencias", icon: "lni-calendar-days",  label: "Ausencias" },
  { to: "/documentos",icon: "lni-folder-1",       label: "Documentos"},
  { to: "/proyectos", icon: "lni-check-circle-1", label: "Proyectos" },
  { to: "/encuestas", icon: "lni-box-archive-1",  label: "Encuestas" },
  { to: "/analiticas",icon: "lni-bar-chart-4",    label: "Analíticas"},
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <i className="lni lni-books-2 big-icon"></i>
          <span className="font-bold text-lg">PDE</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      isActive ? 'nav-item activo' : 'nav-item'
                    }
                  >
                    <i className={`lni ${item.icon} big-icon`}></i>
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? 'nav-item activo' : 'nav-item'
              }
            >
              <i className="lni lni-exit big-icon"></i>
              <span>Salir</span>
            </NavLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}