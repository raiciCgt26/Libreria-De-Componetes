import { Button } from "@/componentes";
import { ButtonWithIcons } from "@/componentes";
import { ButtonsGroups, ToggleButtons } from "@/componentes";
import { ButtonFAB } from "@/componentes";
import { ButtonIconC } from "@/componentes";

const App = () => {
  return (
    <>
      <div className="min-h-screen p-8 ">
        <h1 className="text-3xl font-bold mb-6">Mi Reto de Componentes</h1>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold ">
            Día 1: Botón primario, secundario, outline
          </h2>

          <div className="flex gap-4">
            <Button text="Botón Info" options="info" />
            <Button text="Botón Success" options="success" />
            <Button text="Botón Error" options="error" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">
            Día 2: Botones con íconos, estados (hover, transparent, outline)
          </h2>

          <div className="flex gap-4 ">
            <div className="space-y-4 mb-6">
              <ButtonWithIcons
                text="Botón hover"
                options="hover"
                size="lg"
                icon="none"
              />
              <ButtonWithIcons
                text="transparent"
                options="transparent"
                size="lg"
                icon="none"
              />
              <ButtonWithIcons
                text="Botón outline"
                options="outline"
                size="lg"
                icon="none"
              />
              <ButtonWithIcons
                text="Botón pulso"
                options="pulso"
                size="lg"
                icon="none"
              />
            </div>
            {/*  */}
            <div className="space-y-4 mb-6">
              <ButtonWithIcons
                text="Botón home"
                options="outline"
                size="lg"
                icon="home"
              />
              <ButtonWithIcons
                text="Botón user"
                options="outline"
                size="lg"
                icon="user"
              />
              <ButtonWithIcons
                text="Botón chev"
                options="outline"
                size="lg"
                icon="chev"
              />
              <ButtonWithIcons
                text="Botón setting"
                options="outline"
                size="lg"
                icon="sett"
              />
            </div>
            {/*  */}
            <div className="space-y-5 mb-6">
              <ButtonWithIcons
                text="Tamaño sm"
                options="outline"
                size="sm"
                icon="home"
              />
              <ButtonWithIcons
                text="Tamaño md"
                options="outline"
                size="md"
                icon="user"
              />
              <ButtonWithIcons
                text="Tamaño lg"
                options="outline"
                size="lg"
                icon="chev"
              />
              <ButtonWithIcons
                text="Tamaño xl"
                options="outline"
                size="xl"
                icon="sett"
              />
            </div>
            {/*  */}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">
            Día 3: Button group, toggle buttons.
          </h2>
          <div className="flex gap-4">
            <ButtonsGroups
              text1="Regresar"
              text2="Home"
              icon1="chev"
              icon2="home"
              size="md"
              direction="x"
            ></ButtonsGroups>
            {/*  */}
            <ButtonsGroups
              text1=" "
              text2=" "
              icon1="chev"
              icon2="home"
              size="md"
              direction="x"
            ></ButtonsGroups>
            {/*  */}
            <ButtonsGroups
              text1="top"
              text2="bottom"
              icon1="none"
              icon2="none"
              size="md"
              direction="y"
            ></ButtonsGroups>
            {/*  */}
            <ButtonsGroups
              text1=" "
              text2=" "
              icon1="chev"
              icon2="home"
              size="md"
              direction="y"
            ></ButtonsGroups>
            {/*  */}
            <h3>ToggleButtons</h3>
            <ToggleButtons text1="a" text2="b" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">
            Día 4: FAB (Floating Action Button)
          </h2>
          <div className="flex gap-4">
            <ButtonFAB icon="plus" options="primary"></ButtonFAB>
            <ButtonFAB icon="pencil" options="secondary"></ButtonFAB>
            <ButtonFAB text="NAV" icon="nav" options="extend"></ButtonFAB>
          </div>
        </div>
        {/*  */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">
            Día 5: IconButton, CircleButton efect (scale)
          </h2>
          {/*  */}
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4">
              <ButtonIconC options="map" icons="map" size="md"></ButtonIconC>
              <ButtonIconC options="star" icons="star" size="md"></ButtonIconC>
              <ButtonIconC
                options="heart"
                icons="heart"
                size="md"
              ></ButtonIconC>
              <ButtonIconC options="nav" icons="nav" size="md"></ButtonIconC>
            </div>
            <div className="flex gap-4">
              <ButtonIconC options="map" icons="map" size="sm"></ButtonIconC>
              <ButtonIconC options="map" icons="map" size="md"></ButtonIconC>
              <ButtonIconC options="map" icons="map" size="lg"></ButtonIconC>
              <ButtonIconC options="map" icons="map" size="xl"></ButtonIconC>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
};
export default App;
