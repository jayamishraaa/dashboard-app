import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Link, Outlet } from 'react-router-dom';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    // to: '/dashboard',
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
    // to: '/orders',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,

    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
        // to: '/sales',
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        // to: '/traffic',
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    // to: '/integrations',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
function NavigationItem({ title, icon, to }: { title: string; icon: React.ReactNode; to: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}>
      {icon}
      <Link to={to} style={{ textDecoration: 'none', marginLeft: '8px', color: 'inherit' }}>
        {title}
      </Link>
    </Box>
  );
}

// function Sidebar() {
//   return (
//     <Box sx={{ width: '250px', backgroundColor: '#f4f4f4', padding: '16px' }}>
//       {NAVIGATION.map((item, index) => {
//         if (item.kind === 'header') {
//           return (
//             <Typography key={index} variant="h6" sx={{ padding: '8px 16px' }}>
//               {item.title}
//             </Typography>
//           );
//         }
//         if (item.kind === 'divider') {
//           return <hr key={index} />;
//         }
//         if (item.to) {
//           return (
//             <NavigationItem
//               key={index}
//               title={item.title}
//               icon={item.icon}
//               to={item.to}
//             />
//           );
//         }
//         if (item.children) {
//           return item.children.map((child, childIndex) => (
//             <NavigationItem
//               key={`${index}-${childIndex}`}
//               title={child.title}
//               icon={child.icon}
//               to={child.to}
//             />
//           ));
//         }
//         return null;
//       })}
//     </Box>
//   );
// }
// function DemoPageContent({ pathname }: { pathname: string }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Outlet />
//     </Box>
//   );
// }

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>

        <Outlet />
        
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
