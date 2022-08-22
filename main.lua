function read() 
    instructions = {}
    file = io.open('program')
    for l in file:lines('l') do print(l) end
    file:close()
end

read()
