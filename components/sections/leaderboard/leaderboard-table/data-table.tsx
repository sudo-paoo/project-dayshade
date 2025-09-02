"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Fragment } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { GlassContainer } from "@/components/shared/glass-container";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  dateUpdated: string | undefined;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  dateUpdated,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const formattedDate = dateUpdated
    ? new Date(dateUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";

  return (
    <div className="z-50 my-4 space-y-2">
      <GlassContainer className="lb-glass-plus overflow-hidden rounded-md border border-white/20 p-4">
        <Table className="border-collapse text-center">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="hover:bg-white/10" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white text-lg md:text-2xl border-b border-white/60 text-center pt-2 pb-1"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-white/20 last:border-b-0 md:text-base hover:bg-white/10"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="flex flex-col items-center justify-center gap-4 py-16">
                    <div className="text-center space-y-2">
                      <p className="text-2xl font-bold">
                        Stay tuned! Rankings will be announced soon.
                      </p>
                      <p className="text-xs text-white/40 mt-4">
                        Follow CSC announcements for updates
                      </p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </GlassContainer>
      <div className="flex items-center justify-between">
        <p className="text-base md:text-lg mb-2 z-50 italic">
          Last updated:&nbsp;{formattedDate}
        </p>
        <span className="flex items-center justify-center md:justify-end space-x-3 pt-2">
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-pd-black/50 md:text-lg z-50 hover:brightness-60 hover:bg-foreground"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-black md:text-lg z-50 hover:brightness-60  bg-foreground hover:bg-foreground"
          >
            Next
          </Button>
        </span>
      </div>
    </div>
  );
}
