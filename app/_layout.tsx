import { Stack } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Lugar } from '../src/types/lugar';

interface LugaresContextType {
  lugares: Lugar[];
  agregarLugar: (lugar: Omit<Lugar, 'id'>) => void;
  eliminarLugar: (id: number) => void;
}

const LugaresContext = React.createContext<LugaresContextType | undefined>(undefined);

export default function RootLayout() {
  const [lugares, setLugares] = useState<Lugar[]>([
    {
      id: 1,
      nombre: 'Cotopaxi',
      ciudad: 'Latacunga',
      categoria: 'Naturaleza',
      descripcion: 'Un volcán activo ubicado en los Andes ecuatorianos, conocido por su belleza y desafíos para los montañistas.',
      imagen: 'https://marcaecuador.com/wp-content/uploads/2024/05/dreamstime_xl_122439680-cotopaxi.jpg'
    },
    {
      id: 2,
      nombre: 'Mitad del Mundo',
      ciudad: 'Quito',
      categoria: 'Cultura',
      descripcion: 'Un monumento que marca la línea ecuatorial, donde los visitantes pueden experimentar estar en ambos hemisferios al mismo tiempo.',
      imagen: 'https://i0.wp.com/blog.howlanders.com/wp-content/uploads/2021/01/mitad-del-mundo-quito.jpg'
    },
    {
      id: 3,
      nombre: 'Islas Galápagos',
      ciudad: 'Puerto Ayora',
      categoria: 'Naturaleza',
      descripcion: 'Un archipiélago famoso por su biodiversidad única, hogar de especies que no se encuentran en ningún otro lugar del mundo.',
      imagen: 'https://cdn.sanity.io/images/mkg24y51/production/5eb3b575f56d97c2d214dcc7c6d59c2a99ad5656-1200x800.webp/lugares-turisticos-de-las-islas-galapagos-4.webp'
    },
    {
      id: 4,
      nombre: 'Cuenca',
      ciudad: 'Cuenca',
      categoria: 'Cultura',
      descripcion: 'Una ciudad colonial con calles empedradas, iglesias históricas y una vibrante escena artística.',
      imagen: 'https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Cuenca.jpg'
    }
  ]);

  const agregarLugar = (nuevoLugar: Omit<Lugar, 'id'>) => {
    const lugarCompleto: Lugar = {
      ...nuevoLugar,
      id: Date.now()
    };
    setLugares((prev) => [...prev, lugarCompleto]);
  };

  const eliminarLugar = (id: number) => {
    setLugares((prev) => prev.filter(lugar => lugar.id !== id));
  }

  return (
    <LugaresContext.Provider value={{ lugares, agregarLugar, eliminarLugar }}>
      <Stack screenOptions={{ 
        headerStyle: { backgroundColor: '#0D9488' }, 
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="index" options={{ title: 'Mis Lugares Favoritos', headerShown: false }} />
        <Stack.Screen name="nuevo" options={{ title: 'Nuevo Lugar' }} />
        <Stack.Screen name="detalle" options={{ title: 'Detalle del Lugar' }} />
      </Stack>
    </LugaresContext.Provider>
  );
}

export const useLugares = () => {
  const context = useContext(LugaresContext);
  if (!context) throw new Error('useLugares debe ser usado dentro de un LugaresProvider');
  return context;
}