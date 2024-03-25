"use client";

import { RiArrowRightLine } from "@remixicon/react";
import { Card } from "@tremor/react";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { useState } from "react";

export default function Pdf() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-full border border-white/25 rounded-md p-5 flex gap-x-6">
      <div className="w-full flex gap-x-6">
        <Card className="text-tremor-default  flex items-center justify-between ">
          <p className="bg-transparent">deposito-abril.pdf</p>
          <Button
            icon={RiArrowRightLine}
            iconPosition="right"
            variant="light"
            onClick={() => setIsOpen(true)}
          >
            Ver Pdf
          </Button>

          <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
            <DialogPanel>
              <iframe
                src="http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf"
                width="100%"
                height="700px"
                style={{ border: "none" }}
                allow="fullscreen"
                className="rounded-md"
              ></iframe>
              <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </DialogPanel>
          </Dialog>
        </Card>
        <Card className="text-tremor-default  flex items-center justify-between ">
          <p className="bg-transparent">deposito-mayo.pdf</p>
          <Button
            icon={RiArrowRightLine}
            iconPosition="right"
            variant="light"
            onClick={() => setIsOpen(true)}
          >
            Ver Pdf
          </Button>

          <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
            <DialogPanel>
              <iframe
                src="http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf"
                width="100%"
                height="700px"
                style={{ border: "none" }}
                allow="fullscreen"
                className="rounded-md"
              ></iframe>
              <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </DialogPanel>
          </Dialog>
        </Card>
        <Card className="text-tremor-default  flex items-center justify-between ">
          <p className="bg-transparent">deposito-junio.pdf</p>
          <Button
            icon={RiArrowRightLine}
            iconPosition="right"
            variant="light"
            onClick={() => setIsOpen(true)}
          >
            Ver Pdf
          </Button>

          <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
            <DialogPanel>
              <iframe
                src="http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf"
                width="100%"
                height="700px"
                style={{ border: "none" }}
                allow="fullscreen"
                className="rounded-md"
              ></iframe>
              <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </DialogPanel>
          </Dialog>
        </Card>
        <Card className="text-tremor-default  flex items-center justify-between ">
          <p className="bg-transparent">deposito-julio.pdf</p>
          <Button
            icon={RiArrowRightLine}
            iconPosition="right"
            variant="light"
            onClick={() => setIsOpen(true)}
          >
            Ver Pdf
          </Button>

          <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
            <DialogPanel>
              <iframe
                src="https://facultades.unab.cl/odontologia/wp-content/uploads/2021/03/prueba.pdf"
                width="100%"
                height="700px"
                style={{ border: "none" }}
                allow="fullscreen"
                className="rounded-md"
              ></iframe>
              <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </DialogPanel>
          </Dialog>
        </Card>
      </div>

      {/* <div>
        <Button className="mx-auto block" onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel>
            <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Account Created Successfully
            </h3>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Your account has been created successfully. You can now login to
              your account. For more information, please contact us.
            </p>
            <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
              Got it!
            </Button>
          </DialogPanel>
        </Dialog>
      </div> */}

      {/* <div className="w-4/5 h-[calc(100vh-56px)]">
        <Card className="text-tremor-default h-full">
          <iframe
            src="http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="fullscreen"
          ></iframe>
        </Card>
      </div> */}
    </div>
  );
}
